"""Figures for 'Where the analogy breaks: ecological versus social tipping points'.

All three figures are illustrative: they are generated from minimal models and
synthetic data, not from empirical observations. Run with Python 3 and
numpy, scipy and matplotlib installed:

    python figures.py

Outputs fig1.pdf, fig2.pdf and fig3.pdf in the working directory.
"""

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.stats import norm, kendalltau

BLUE, ORANGE, AQUA = "#2a78d6", "#eb6834", "#1baf7a"
INK, MUTED, GRID = "#1f1f1e", "#6b6a63", "#d9d8d2"

plt.rcParams.update({
    "font.family": "serif",
    "font.serif": ["Latin Modern Roman", "CMU Serif", "DejaVu Serif"],
    "mathtext.fontset": "cm",
    "font.size": 8.5,
    "axes.titlesize": 9,
    "axes.labelsize": 8.5,
    "axes.edgecolor": MUTED,
    "axes.linewidth": 0.6,
    "axes.labelcolor": INK,
    "xtick.color": MUTED,
    "ytick.color": MUTED,
    "xtick.labelcolor": INK,
    "ytick.labelcolor": INK,
    "xtick.major.width": 0.6,
    "ytick.major.width": 0.6,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "legend.frameon": False,
    "savefig.bbox": "tight",
    "savefig.pad_inches": 0.02,
})

WIDTH = 6.3  # inches, matches the LaTeX text width


def panel_label(ax, s):
    ax.text(-0.14, 1.04, s, transform=ax.transAxes, fontsize=10,
            fontweight="bold", va="bottom", ha="left", color=INK)


# ---------------------------------------------------------------------------
# Figure 1: fold bifurcation, hysteresis and critical slowing down
# Shallow-lake-type model  dx/dt = c - b x + x^8 / (1 + x^8)
# ---------------------------------------------------------------------------
B = 1.0
Q = 8


def control_at_equilibrium(x):
    return B * x - x**Q / (1 + x**Q)


def fig1():
    x = np.linspace(0, 2.4, 6000)
    c = control_at_equilibrium(x)
    dc = np.gradient(c, x)
    stable = dc > 0

    # fold points: local max (lower branch ends) and local min (upper branch ends)
    sign_change = np.where(np.diff(np.sign(dc)) != 0)[0]
    i_up, i_down = sign_change[0], sign_change[1]  # c max, then c min
    c_F2, x_F2 = c[i_up], x[i_up]      # forward fold (lower branch lost)
    c_F1, x_F1 = c[i_down], x[i_down]  # backward fold (upper branch lost)

    fig, axes = plt.subplots(1, 3, figsize=(WIDTH, 2.25),
                             gridspec_kw={"width_ratios": [1.15, 1, 1]})

    # (a) equilibrium curve
    ax = axes[0]
    seg_lower = (x <= x_F2)
    seg_mid = (x > x_F2) & (x < x_F1)
    seg_upper = (x >= x_F1)
    ax.plot(c[seg_lower], x[seg_lower], color=BLUE, lw=1.8)
    ax.plot(c[seg_upper], x[seg_upper], color=BLUE, lw=1.8)
    ax.plot(c[seg_mid], x[seg_mid], color=BLUE, lw=1.2, ls=(0, (3, 2)))
    # jumps
    x_up_target = x[seg_upper][np.argmin(np.abs(c[seg_upper] - c_F2))]
    x_down_target = x[seg_lower][np.argmin(np.abs(c[seg_lower] - c_F1))]
    ax.annotate("", xy=(c_F2, x_up_target), xytext=(c_F2, x_F2),
                arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.1,
                                mutation_scale=8))
    ax.annotate("", xy=(c_F1, x_down_target), xytext=(c_F1, x_F1),
                arrowprops=dict(arrowstyle="-|>", color=ORANGE, lw=1.1,
                                mutation_scale=8))
    ax.text(c_F2 + 0.004, (x_F2 + x_up_target) / 2, "F$_2$", color=INK,
            ha="left", va="center")
    ax.text(c_F1 - 0.004, (x_F1 + x_down_target) / 2, "F$_1$", color=INK,
            ha="right", va="center")
    ax.text(0.97, 0.06, "dashed: unstable", transform=ax.transAxes,
            ha="right", color=MUTED, fontsize=7.5)
    ax.set_xlabel("Control $c$ (e.g. nutrient loading)")
    ax.set_ylabel("State $x$ (e.g. turbidity)")
    ax.set_title("Fold and hysteresis", loc="left")
    ax.set_xlim(c_F1 - 0.06, c_F2 + 0.06)
    ax.set_ylim(0, 2.0)
    panel_label(ax, "a")

    # (b) simulated series as c ramps slowly towards F2 on the lower branch
    rng = np.random.default_rng(7)
    T, dt = 3000, 0.1
    n = int(T / dt)
    cs = np.linspace(c_F1 + 0.01, c_F2 - 0.003, n)
    xs = np.empty(n)
    xs[0] = x[seg_lower][np.argmin(np.abs(c[seg_lower] - cs[0]))]
    sigma = 0.008
    for k in range(1, n):
        xv = xs[k - 1]
        drift = cs[k - 1] - B * xv + xv**Q / (1 + xv**Q)
        xs[k] = xv + drift * dt + sigma * np.sqrt(dt) * rng.standard_normal()
    step = 10  # sample every unit time
    xs_s, cs_s = xs[::step], cs[::step]
    t = np.arange(len(xs_s))

    ax = axes[1]
    ax.plot(t, xs_s, color=BLUE, lw=0.8)
    ax.set_xlabel("Time (control rising towards F$_2$)")
    ax.set_ylabel("State $x$")
    ax.set_title("Approaching the fold", loc="left")
    panel_label(ax, "b")

    # (c) rolling lag-1 autocorrelation of detrended series
    w_detrend, w_roll = 50, 500
    kernel = np.ones(w_detrend) / w_detrend
    trend = np.convolve(xs_s, kernel, mode="same")
    resid = (xs_s - trend)[w_detrend:-w_detrend]
    tr = t[w_detrend:-w_detrend]
    ac = np.array([np.corrcoef(resid[i:i + w_roll - 1], resid[i + 1:i + w_roll])[0, 1]
                   for i in range(len(resid) - w_roll)])
    ta = tr[w_roll:]
    tau, _ = kendalltau(ta, ac)

    ax = axes[2]
    ax.plot(ta, ac, color=ORANGE, lw=1.6)
    ax.set_xlabel("Time")
    ax.set_ylabel("Lag-1 autocorrelation")
    ax.set_title("Critical slowing down", loc="left")
    ax.text(0.04, 0.92, f"Kendall $\\tau$ = {tau:.2f}", transform=ax.transAxes,
            color=INK, fontsize=7.5, va="top")
    ax.set_xlim(t[0], t[-1])
    panel_label(ax, "c")

    for a in axes:
        a.grid(True, color=GRID, lw=0.5)
        a.set_axisbelow(True)
    fig.tight_layout(w_pad=1.6)
    fig.savefig("fig1.pdf")
    plt.close(fig)


# ---------------------------------------------------------------------------
# Figure 2: threshold model, critical mass and the withdrawal test
# Thresholds ~ Normal(mu, sd); adoption r with committed share s:
#     dr/dt = [ s + (1 - s) F(r) - r ] / tau
# ---------------------------------------------------------------------------
MU, SD = 0.45, 0.12


def F(r):
    return norm.cdf(r, MU, SD)


def final_adoption(s, r0=0.0, iters=4000):
    r = max(r0, s)
    for _ in range(iters):
        r = s + (1 - s) * F(r)
    return r


def fig2():
    fig, axes = plt.subplots(1, 2, figsize=(WIDTH, 2.4),
                             gridspec_kw={"width_ratios": [1, 1.35]})

    # (a) final adoption vs committed share
    ax = axes[0]
    s_grid = np.linspace(0, 0.4, 801)
    r_final = np.array([final_adoption(s) for s in s_grid])
    jump = np.argmax(np.diff(r_final))
    s_c = s_grid[jump + 1]
    ax.plot(s_grid, r_final, color=BLUE, lw=1.8)
    ax.axvline(s_c, color=MUTED, lw=0.8, ls=(0, (2, 2)))
    ax.text(s_c + 0.008, 0.45, f"critical mass\n$s_c \\approx$ {s_c:.2f}",
            color=INK, fontsize=7.5, va="center")
    ax.set_xlabel("Committed minority $s$")
    ax.set_ylabel("Equilibrium adoption $r^*$")
    ax.set_title("Threshold model", loc="left")
    ax.set_xlim(0, 0.4)
    ax.set_ylim(0, 1.02)
    panel_label(ax, "a")

    # middle (unstable) fixed point of r = F(r) with no support, for reference
    rr = np.linspace(0.01, 0.99, 9801)
    g = F(rr) - rr
    roots = rr[np.where(np.diff(np.sign(g)) != 0)[0]]
    r_mid = roots[1] if len(roots) >= 3 else None

    # (b) withdrawal test
    ax = axes[1]
    dt, T = 0.05, 120
    t = np.arange(0, T, dt)
    on, off = 10, 50
    support = (t >= on) & (t < off)
    tau = 2.0

    def simulate(s_level):
        r = np.zeros_like(t)
        for k in range(1, len(t)):
            s = s_level if support[k - 1] else 0.0
            r[k] = r[k - 1] + dt * (s + (1 - s) * F(r[k - 1]) - r[k - 1]) / tau
        return r

    s_low = round(s_c - 0.06, 2)
    s_high = round(s_c + 0.06, 2)
    r_low, r_high = simulate(s_low), simulate(s_high)

    # inertia: same support level as the supra-critical case, but no bistability
    k_in, k_out = 0.12, 0.04
    r_in = np.zeros_like(t)
    target_on = r_high[support][-1]
    for k in range(1, len(t)):
        if support[k - 1]:
            r_in[k] = r_in[k - 1] + dt * k_in * (target_on - r_in[k - 1])
        else:
            r_in[k] = r_in[k - 1] + dt * k_out * (0.0 - r_in[k - 1])

    ax.axvspan(on, off, color="#efeeea", lw=0)
    ax.text((on + off) / 2, 1.04, "support in place", ha="center",
            color=MUTED, fontsize=7.5)
    ax.plot(t, r_high, color=BLUE, lw=1.8)
    ax.plot(t, r_low, color=ORANGE, lw=1.8, ls=(0, (5, 2)))
    ax.plot(t, r_in, color=AQUA, lw=1.8, ls=(0, (1, 1.5)))
    if r_mid is not None:
        ax.axhline(r_mid, color=MUTED, lw=0.6, ls=(0, (2, 2)))
        ax.text(T - 1, r_mid + 0.025, "unstable threshold", ha="right",
                color=MUTED, fontsize=7)
    # direct labels
    ax.text(T - 1, r_high[-1] - 0.06, f"above $s_c$ ($s$ = {s_high:.2f}): persists",
            ha="right", color=INK, fontsize=7.5, va="top")
    ax.text(72, 0.60, "inertia (no bistability):\nslow return",
            ha="left", color=INK, fontsize=7.5)
    ax.text(56, 0.035, f"below $s_c$ ($s$ = {s_low:.2f}): reverts",
            ha="left", color=INK, fontsize=7.5)
    ax.set_xlabel("Time")
    ax.set_ylabel("Adoption share $r$")
    ax.set_title("Withdrawal test", loc="left")
    ax.set_xlim(0, T)
    ax.set_ylim(0, 1.1)
    panel_label(ax, "b")

    for a in axes:
        a.grid(True, color=GRID, lw=0.5)
        a.set_axisbelow(True)
    fig.tight_layout(w_pad=1.6)
    fig.savefig("fig2.pdf")
    plt.close(fig)
    return s_c, s_low, s_high


# ---------------------------------------------------------------------------
# Figure 3: variance of a rising share increases with no loss of resilience
# logit(p_t) = trend(t) + u_t,  u_t AR(1) with constant phi and sigma
# ---------------------------------------------------------------------------

def logit(p):
    return np.log(p / (1 - p))


def fig3():
    rng = np.random.default_rng(11)
    days = 6 * 365
    t = np.arange(days)
    p_start, p_end = 0.01, 0.20
    trend = np.linspace(logit(p_start), logit(p_end), days)
    phi, sig = 0.5, 0.10
    u = np.zeros(days)
    for k in range(1, days):
        u[k] = phi * u[k - 1] + sig * rng.standard_normal()
    share = 1 / (1 + np.exp(-(trend + u)))

    def residuals(y, bw=50):
        kernel = np.ones(bw) / bw
        sm = np.convolve(y, kernel, mode="same")
        return (y - sm)[bw:-bw]

    def rolling_var(y, w=730):
        return np.array([np.var(y[i:i + w]) for i in range(len(y) - w)])

    res_raw = residuals(share)
    res_logit = residuals(logit(share))
    v_raw = rolling_var(res_raw)
    v_logit = rolling_var(res_logit)
    tt = (t[50:-50][730:]) / 365
    idx_raw = v_raw / v_raw[0]
    idx_logit = v_logit / v_logit[0]
    tau_raw, _ = kendalltau(tt, v_raw)
    tau_logit, _ = kendalltau(tt, v_logit)

    fig, axes = plt.subplots(1, 2, figsize=(WIDTH, 2.3))

    ax = axes[0]
    ax.plot(t / 365, share * 100, color=BLUE, lw=0.6)
    ax.set_xlabel("Years")
    ax.set_ylabel("Share (%)")
    ax.set_title("Synthetic adoption share, constant resilience", loc="left")
    ax.set_xlim(0, days / 365)
    ax.set_ylim(0, None)
    panel_label(ax, "a")

    ax = axes[1]
    ax.plot(tt, idx_raw, color=ORANGE, lw=1.8)
    ax.plot(tt, idx_logit, color=BLUE, lw=1.8, ls=(0, (5, 2)))
    ax.axhline(1, color=MUTED, lw=0.6)
    ax.text(tt[-1], idx_raw[-1], f"  raw share\n  $\\tau$ = {tau_raw:.2f}",
            color=INK, fontsize=7.5, va="center", ha="left")
    ax.text(tt[-1], idx_logit[-1], f"  logit share\n  $\\tau$ = {tau_logit:.2f}",
            color=INK, fontsize=7.5, va="center", ha="left")
    ax.set_xlabel("Years (end of 2-year window)")
    ax.set_ylabel("Rolling variance (first window = 1)")
    ax.set_title("Variance of detrended residuals", loc="left")
    ax.set_xlim(tt[0], tt[-1])
    ax.set_yscale("log")
    panel_label(ax, "b")

    for a in axes:
        a.grid(True, color=GRID, lw=0.5)
        a.set_axisbelow(True)
    fig.tight_layout(w_pad=4.5)
    fig.savefig("fig3.pdf")
    plt.close(fig)
    return tau_raw, tau_logit, idx_raw[-1], idx_logit[-1]


if __name__ == "__main__":
    fig1()
    print("fig2 s_c, s_low, s_high:", fig2())
    print("fig3 tau_raw, tau_logit, end index raw, logit:", fig3())
