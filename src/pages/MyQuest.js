import React from 'react';
import { ArrowLeft, Lightbulb, Award, Droplets, Sun, Sprout, Cpu, Recycle, Zap, Leaf, Wind, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function MyQuest() {
  const timelineEvents = [
    {
      year: 'The Beginning',
      title: 'Roots in the Heart of India',
      description: 'I was born in Nagpur city, my hometown, in the state of Maharashtra, India. Nagpur, often called the "Heart of India" as it is the most prominent city in Central India and is considered the geographical center of the country.',
      details: 'Nagpur is home to the famous Zero Mile Marker, a monument established during the British era to measure distances across India, which still stands today. As in England, Hereford is known as the Apple Capital for its extensive apple orchards and high yield, similarly, Nagpur is called the Orange City for its large-scale orange cultivation and production. As my mother and father were working in a school in the town of Kondhali, we lived there during my childhood. Kondhali is located in Katol Taluka (Tehsil) of Nagpur district, provided a nurturing environment for my early years.',
      icon: Sprout,
      color: 'from-[#8B9D83] to-[#6B7D63]'
    },
    {
      year: '2002',
      title: 'First Science Exhibition - Stroboscopic Effect',
      description: 'When I was 10 years old, I participated for the first time in a science exhibition at the Taluka level, where students from schools across Katol Taluka showcased their scientific models.',
      details: 'I presented a model on the Stroboscopic Effect, which featured a parrot and cage. I drew a parrot on one side and a cage on the other; when the model was revolved rapidly, it appeared as if the parrot was inside the cage. As a child, I had a fondness for watching cartoons, and I chose this topic to explore and demonstrate the science behind motion, films, and animation. This early experience of creating and presenting a scientific model sparked my curiosity and laid the foundation for my lifelong interest in research and experimentation.',
      additionalText: 'The certificate I received for the competition is shown below. The original certificate is in Marathi, followed by its English translation. I participated in these science exhibitions for four consecutive years, and the fourth year was especially memorable for me.',
      icon: Lightbulb,
      color: 'from-[#3A6B35] to-[#2D5016]',
      imageStyle: 'vertical',
      images: [
        '/images/stroboscopic_1.jpg',
        '/images/stroboscopic_certificate_new.png'
      ]
    },
    {
      year: '2003',
      title: 'Sustaining Plants with Cotton Wick Capillary Action',
      description: 'When I was in 6th standard, I again participated in the science exhibition. In those days, water scarcity was a pressing issue in the Vidarbha region. So, this time my science model was on "Sustaining Plants with Cotton Wick Capillary Action."',
      details: 'For this project, I used an old plastic bucket from home that was no longer in use. I made small holes at the bottom of the bucket and inserted cotton wicks through them. Then, I carefully transferred a plant whose pot had cracked into this bucket. After that, I placed the bucket on top of a container filled with water, making sure the ends of the cotton wicks were hanging down into the water below. The cotton wicks helped draw water upward through capillary action to keep the plant moist. I always ensured that the container stayed full of water so the plant could get water naturally. This project followed the "Best from Waste" principle, as I didn\'t buy anything new and reused materials already available at home. It was a simple yet sustainable way to care for plants.',
      additionalText: 'I explained to the examiners how the cotton wick supplies water to the plant efficiently without wastage, removing the need to rely on neighbours or helpers when you are away from home. When the examiner asked what I would do if I were traveling for a long time and had to use considerably large pots for all my plants, I organised my thoughts and, recalling notes from my mentors, responded that you can reverse the setup: keep one large water container elevated and place cotton wicks from it into the plants. They appreciated my answer. Big thank you to my mentors. Many teachers and students appreciated my idea and how I used waste materials creatively. It made me feel encouraged to keep thinking about new ways to protect nature and use resources wisely.',
      icon: Droplets,
      color: 'from-[#4A7C9C] to-[#2D5B6E]',
      imageStyle: 'vertical',
      images: [
        '/images/cotton_wick_1.jpg',
        '/images/cotton_wick_2.png'
      ]
    },
    {
      year: '2004',
      title: 'Seasons and Climate - Understanding Drought',
      description: 'In July 2004, the Maharashtra government officially declared a "drought like situation" in Vidarbha, noting that many districts had received below-average rainfall.',
      details: 'For the science exhibition this time, I made a model on Seasons and Climate. I set up the Sun and the Earth and used stickers on the Earth to show how weather changes in different regions throughout the year. I demonstrated how the tilt and orbit of the Earth cause change in day length and seasons, showing why some regions experience summer, winter, and varying weather patterns.',
      additionalText: 'Using my model, I highlighted the 2004 drought in Vidarbha, explaining how monsoon failure led to severe water scarcity. While such variations are natural, human activities like deforestation, overuse of groundwater, and unsustainable farming can worsen their impact. The model aimed to raise awareness of the challenges faced by farmers and communities, emphasising the importance of understanding seasonal changes, climate variability, and effective water management to reduce the effects of droughts.',
      icon: Sun,
      color: 'from-[#C2956E] to-[#A67C52]',
      imageStyle: 'vertical',
      images: [
        '/images/seasons_climate_1.jpg',
        '/images/seasons_climate_2.png'
      ]
    },
    {
      year: '2005',
      title: 'Improving Groundwater Levels - First Prize Winner! 🏆',
      description: 'Last year, I focused on highlighting the problem of water scarcity. For the 2005 science exhibition, I presented a model titled "Improving Groundwater Levels Using Minor Irrigation Channels", which demonstrated a practical solution to recharge groundwater.',
      details: 'For the model, I used an empty oil tin box cut into two halves and created a groove to hold a PVC pipe. I cut a waste large PVC pipe vertically in half and fixed it into the groove to represent a canal. Along this canal, I made holes to attach rubber tubes, with the other ends connected to wells made from half-cut plastic bottles placed in the farm area of the tin box. The remaining space in the tin box represented farmland. Through this model, I demonstrated that building minor irrigation channels along the sides of hills or elevated areas can help stop rainwater from flowing away, directing it into the ground instead. This method effectively recharges groundwater levels and ensures water reaches wells and farmland, providing a simple, practical solution to improve water availability for agriculture in regions facing water scarcity.',
      additionalText: 'The model was very well received at the science exhibition. Judges and visitors appreciated how it clearly demonstrated a real-world solution to water scarcity, and as a result, I was awarded first prize for the project.',
      additionalText2: 'After receiving the first prize award, I was invited on stage to share my thoughts and experiences.',
      additionalText3: 'I presented the same project at the Annual School Gathering. In the pictures above, Mr.\u00A0Rameshchandra\u00A0Bang, Hon\'ble Minister in the Government of Maharashtra (2005), is seen listening attentively to my demonstration and extending his congratulations.',
      icon: Award,
      color: 'from-[#3A6B35] to-[#2D5016]',
      award: true,
      imageStyle: 'vertical',
      imagesPosition: 'middle',
      stageImage: '/images/stage_speech.jpg',
      ministerImages: [
        '/images/minister_visit_1.jpg',
        '/images/minister_visit_2.jpg'
      ],
      images: [
        '/images/groundwater_1.jpg',
        '/images/groundwater_2.png'
      ]
    },
    {
      year: 'January 2006',
      title: 'District Level Science Exhibition',
      description: 'After winning first prize at the Taluka level, I had the opportunity to represent my Taluka in the science exhibition at the district level, where selected entries from different Talukas in Nagpur district competed. I represented Katol Taluka and this time built a bigger model, keeping the same title.',
      details: 'The pictures below show the certificate I received and me posing with my project.',
      additionalText2: 'My mother, father, grandmother, aunt, littile brother, friend and mentors came to support and encourage me, which made the experience even more special.',
      additionalText4: 'In January 2006 itself, I volunteered at the Raman Science Centre\'s Mobile Exhibition. An interactive science bus featuring various scientific and astronomical projects, where I was responsible for explaining the exhibits to visitors.',
      additionalText5: 'About Raman Science Centre - The Raman Science Centre in Nagpur, established in 1992, is an interactive science museum with a planetarium. It features hands-on exhibits, multiple galleries including innovation and fun science, a prehistoric animal park, and hosts science shows and sky observation programs. The centre promotes science education and engagement for all ages. The centre is named after Nobel Laureate Indian physicist Chandrasekhara Venkata Raman.',
      icon: Award,
      color: 'from-[#8B9D83] to-[#6B7D63]',
      imageStyle: 'vertical',
      imageSize: 'small',
      imagesPosition: 'middle',
      familyImage: '/images/family_support.jpg',
      ramanImage: '/images/raman_certificate.jpg',
      images: [
        '/images/district_level_1.jpg',
        '/images/district_level_2.png'
      ]
    },
    {
      year: 'October 2006',
      title: 'National Cyber Olympiad - Technology Meets Sustainability',
      description: 'In June 2006, after my elder sister passed her 12th-grade (Higher Secondary Certificate) examination, our family relocated to Nagpur City. She gained admission to a college in the city to pursue her bachelor\'s degree, while I was admitted to a school there. Meanwhile, my parents decided to commute 50 kilometers daily for work for the rest of their tenure.',
      additionalText: 'My quest for a sustainable future continued here as well, this time with a focus on technology. I cleared the National Cyber Olympiad exam, marking my first step toward blending sustainability with technological innovation.',
      icon: Cpu,
      color: 'from-[#4A7C9C] to-[#2D5B6E]',
      images: [
        '/images/cyber_olympiad.jpg'
      ]
    },
    {
      year: 'December 2006',
      title: 'Best from Waste Competition',
      description: 'Third Prize Winner - Pen Holder Creation',
      details: 'Since childhood, I have been taught the importance of reusing and recycling at home. I won the 3rd prize in the "Best from Waste" competition by creating a pen holder using waste jute bags and cardboard. The competition provided various waste materials, and participants were required to select any of them and transform the chosen material into something useful.',
      icon: Recycle,
      color: 'from-[#3A6B35] to-[#2D5016]',
      images: [
        '/images/best_from_waste.jpg'
      ]
    },
    {
      year: '2007',
      title: 'Non-Conventional/Renewable Energy Sources & VNIT Axis 2007',
      description: 'In 2007, I participated in a school-level science exhibition where I demonstrated different methods of generating electricity and highlighted the benefits of non-conventional/renewable energy sources. I won second prize for my project, which impressed the examiners and earned me the opportunity to represent my school at the Junior Scientist Model Making Competition at the prestigious VNIT College. Axis 2007 was one of the most respected and popular science events at the time, where I participated as a junior scientist with the hope and dream that I will become a senior scientist one day.',
      icon: Zap,
      color: 'from-[#C2956E] to-[#A67C52]',
      imageStyle: 'vertical',
      images: [
        '/images/vnit_2007_1.jpg',
        '/images/vnit_2007_2.jpg'
      ]
    },
    {
      year: '2008',
      title: 'National Children\'s Science Congress',
      description: 'In 2008, I participated in the National Children\'s Science Congress organised by the Government of India. As a child scientist, I took part in a slogan-writing competition and presented several creative entries, the most notable being: "Earth without trees is like pizza without cheese."',
      icon: Leaf,
      color: 'from-[#3A6B35] to-[#2D5016]',
      imageStyle: 'vertical',
      images: [
        '/images/ncsc_2008_1.jpg',
        '/images/ncsc_2008_2.png'
      ]
    },
    {
      year: '2011',
      title: '1st India International Energy Summit',
      description: 'In 2011, I participated in a presentation competition at the 1st India International Energy Summit, which aimed to promote renewable energy sources and reduce the use of conventional fuels such as coal and wood. My presentation focused on developing a bio-liquid derived from cow waste and other natural ingredients, designed to be sprayed at a vehicle\'s exhaust outlet to help reduce emissions. The event was a major platform for innovative energy solutions, and I was proud to receive a certificate signed by Dr Vijay Bhatkar.',
      details: 'About Dr. Bhatkar - Dr Vijay Bhatkar is a distinguished Indian computer scientist, IT visionary, and educationist, widely recognised as the architect of India\'s National Supercomputing Initiative. He led the development of the country\'s first indigenous supercomputers PARAM 8000 in 1991 and PARAM 10000 in 1998.',
      icon: Zap,
      color: 'from-[#4A7C9C] to-[#2D5B6E]',
      images: [
        '/images/energy_summit_2011.jpg'
      ]
    },
    {
      year: '2013-2015',
      title: 'Service Engineer at Kcal Solutions - My First Job',
      description: 'From 2013 to 2015, I worked as a Service Engineer at Kcal Solutions, an authorized channel partner of Thermax Ltd. in Nagpur. This was my first job.',
      details: 'Thermax Ltd, headquartered in Pune, India, is a major Indian engineering company recognized as a leader in the energy and environment sectors. It was originally incorporated in 1966 as Wanson India Ltd, focusing initially on manufacturing package boilers. Over the years, Thermax has expanded its scope to provide comprehensive solutions for industries in areas such as heating, cooling, power generation, water and wastewater treatment, and air pollution control. With a strong global presence, Thermax is known for delivering innovative and sustainable technologies.',
      additionalText: 'During this period, I collaborated closely with Mr. Vivek Phadke to promote the use of agro-waste briquettes as a boiler fuel, an environmentally superior and sustainable alternative to coal and wood. Mr. Vivek Phadke also co-runs the Eco Friendly Living Foundation with Mr. Vijay Limaye. The NGO has partnered with Nagpur Municipal Corporation to promote the use of agro-waste briquettes for cremation in Nagpur\'s crematoriums. This initiative significantly reduces pollution emissions and supports sustainable environmental practices in the community.',
      additionalText2: 'The photo was taken on a sunny day in Pune during my visit to Thermax Ltd.',
      icon: Zap,
      color: 'from-[#3A6B35] to-[#2D5016]',
      imageSize: 'extra-small',
      images: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/aac379788_IMG_20180628_160327.jpg'
      ]
    },
    {
      year: '2016',
      title: 'Silver Medal in Yoga - Embracing Holistic Sustainability',
      description: 'In 2016, I successfully passed one of the most challenging yoga examinations at JS Yog Center in India, earning a prestigious silver medal for my dedication and skill.',
      details: 'This achievement was not just a milestone in my yoga journey but also a transformative moment that deepened my commitment to a sustainable lifestyle. Inspired by the holistic principles of yoga, which emphasize harmony with nature and mindful living, I embraced sustainable practices in my daily life.',
      additionalText: 'This includes conscious choices to reduce waste, conserve energy, and promote wellness through natural and eco-friendly habits, reflecting the interconnectedness of personal health and environmental stewardship. This journey has profoundly shaped my approach to well-being, blending physical discipline with a deep respect for the planet.',
      icon: Leaf,
      color: 'from-[#8B9D83] to-[#6B7D63]',
      images: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/167f37d7f_IMG_20140629_090853_3CS.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/e898ac192_IMG_20140629_090932_1CS.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/90d8b09ba_IMG_20140629_074823_2CS.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/19a876bcc_IMG_20140629_074818_1CS.jpg'
      ],
      imageStyle: 'full-grid'
    },
    {
      year: '2016-2018',
      title: 'MBA at Savitribai Phule Pune University - Live Project Competition Winner',
      description: 'In 2016, I relocated to Pune to pursue a two-year MBA programme at Savitribai Phule Pune University, often referred to as the "Oxford of the East."',
      details: 'Eager for new avenues of personal and professional growth, I actively participated in co-curricular initiatives. During my studies, I led a dynamic team that achieved notable success in 2018, winning the Live Project Competition for our innovative waste management solution. This accomplishment underscored both our collaborative abilities and our dedication to tackling environmental challenges through practical, evidence-based strategies. For further details and key outcomes from this project, please refer to the Projects section.',
      icon: Award,
      color: 'from-[#3A6B35] to-[#2D5016]',
      award: true,
      images: []
    },
    {
      year: '2018',
      title: 'Air Pollution Control Solutions - S&M International & Ship & Shore Environmental',
      description: 'From 2018 to 2020, I worked with S&M International, a dynamic start-up based in Pune, managing key operations across the Latin American and US markets. During this period, I collaborated closely with Ship & Shore Environmental Inc., a renowned US-based company specialising in advanced environmental solutions.',
      details: 'In particular, my role involved regular interaction with Anoosheh Oskouian (CEO) and Anu D. Vij (COO) of Ship & Shore Environmental Inc., supporting their efforts to introduce sustainability-focused technologies to the Indian market. A key initiative involved assisting with the launch of thermal oxidiser systems, crucial equipment for air pollution control. Thermal oxidisers are highly effective in treating industrial emissions, helping to dramatically reduce harmful pollutants and volatile organic compounds (VOCs).',
      additionalText: 'India faces significant challenges related to air pollution, which affects both public health and the environment. The adoption of advanced thermal oxidiser technology is essential for industries striving to meet stringent regulatory standards and for cities working towards cleaner air and sustainable development. Through this collaboration, I contributed to bringing innovative, eco‑friendly solutions to market, helping address one of India\'s most pressing environmental issues while supporting the broader mission of environmental sustainability.',
      icon: Wind,
      color: 'from-[#4A7C9C] to-[#2D5B6E]',
      images: []
    },
    {
      year: 'February 2019',
      title: 'Meeting Dr. Raghunath Mashelkar - The Pioneer of Gandhian Engineering',
      description: 'I had the opportunity to interact with Dr. Raghunath Mashelkar. I shared my quest for a sustainable future with him, and he offered his best wishes for my work.',
      details: 'Raghunath Mashelkar originated the idea of "Gandhian Engineering" in 2008, which can be simply described as "getting more from less for more people." The concept draws inspiration from Mahatma Gandhi\'s teaching that the earth has enough resources to meet everyone\'s needs but not their greed. Unlike traditional innovation focused on profit, Gandhian Engineering aims to create products and services that deliver higher performance using fewer resources, at lower cost, and with less environmental impact making these innovations accessible and beneficial to a vast population, especially the underprivileged.',
      additionalText: 'Here are a few of the many accolades of Dr. Raghunath Mashelkar:',
      additionalText2: '• Padma Vibhushan, India\'s second highest civilian award (2014)\n• Member of the Esteemed Jury Panel of the Prestigious Queen Elizabeth Prize for Engineering Since 2019\n• Foreign Member, Royal Academy of Engineering, UK (1996)\n• Fellow, Royal Society of Chemistry, Cambridge, UK (2006)\n• Fellow, The Institute of Physics, London (1998)\n• Fellow, Institution of Chemical Engineers, UK (1996)\n• Fellow of the Royal Society (FRS), UK (1998)\n• TWAS Lenovo Science Prize, The World Academy of Sciences (2018)',
      icon: Lightbulb,
      color: 'from-[#C2956E] to-[#A67C52]',
      imageSize: 'small',
      images: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/bdc53f16b_IMG_20190224_212809.jpg'
      ]
    },
    {
      year: 'September 2019',
      title: 'International Collaboration with Tecintegral S.A.S., Colombia',
      description: 'In the pictures below, I am posing with two of our valued associates with whom I have worked closely: Mr. Nicolas McAllister Obregon, General Manager at Tecintegral S.A.S., and Mr. German Hernandez Valenzuela, Engineering Manager at Tecintegral S.A.S., both from Bogotá, Colombia.',
      details: 'Tecintegral S.A.S. is a reputable engineering and technology solutions company based in Bogotá, Colombia, dedicated to providing innovative, efficient, and high-quality services to clients across various industries. Their commitment to excellence and customer satisfaction has made them a trusted partner in delivering successful projects.',
      icon: Users,
      color: 'from-[#8B9D83] to-[#6B7D63]',
      images: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/c4b6d63e1_IMG_20190918_163255.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/9123dcae5_IMG-20190914-WA0001.jpg'
      ]
    },
    {
      year: 'October 2019',
      title: 'Partnership with Praj Industries Limited',
      description: 'With my boss Mr. Shyam Bhutada and Mr. Shishir Joshipura, CEO of Praj Industries Limited, one of our associates.',
      details: 'Praj Industries Limited focuses on sustainability by developing eco-friendly bio-based technologies that reduce carbon emissions, waste, and water usage. The company promotes clean energy through biofuels like ethanol and compressed biogas, supports circular economy principles, and innovates to help customers lower their environmental impact. Praj also emphasizes green procurement, water conservation, and community welfare to foster a greener future.',
      icon: Leaf,
      color: 'from-[#3A6B35] to-[#2D5016]',
      imageSize: 'small',
      images: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/b8a40f5ac_DSC07184.jpg'
      ]
    },
    {
      year: '2021',
      title: 'MSc in Business Analytics at University of Exeter - Environmental AI Research',
      description: 'While working at S&M International in Pune, India, I focused rigorously on data collection and analysis, which sparked a growing interest in advanced data analytics and motivated me to further enhance my skills. In September 2020, I relocated to the United Kingdom to undertake an MSc in Business Analytics at the University of Exeter.',
      details: 'During my studies, I pursued Environmental Analytics and worked on projects concerning Californian wildfires under the supervision of Dr Rebecca Mitchell, who now serves as CEO of Quanterra Systems Ltd, Exeter. With Dr Mitchell\'s expert guidance, I developed and applied advanced artificial intelligence techniques to analyse complex environmental issues. By leveraging machine learning models and state-of-the-art analytical tools, I extracted meaningful insights from large datasets, contributing to a deeper understanding of wildfire dynamics and broader sustainability challenges. These experiences have strengthened my commitment to employing AI-driven analytics in addressing critical environmental problems.',
      icon: Cpu,
      color: 'from-[#4A7C9C] to-[#2D5B6E]',
      images: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/3c1758160_20211018_151344.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/fbf1dfec1_IMG-20211211-WA0017.jpg'
      ],
      imageStyle: 'equal-height'
    },
    {
      year: '2022-2025',
      title: 'Leading AI-Driven Sustainability Initiatives',
      description: 'Since 2022, I have led and contributed to a range of sustainability-focused projects, with details kept confidential in accordance with GDPR requirements.',
      details: 'Additionally, I have worked with PineVox Ltd, a recognized pioneer in VoIP technology within the UK telecom sector. In a dynamic, high-growth environment, I led the integration of advanced AI features and oversaw significant system upgrades, resulting in measurable improvements in operational efficiency and a marked reduction in system issues. My initiatives enhanced product reliability and contributed to increased customer satisfaction following their successful implementation.',
      additionalText: 'Over the past year, I have conducted independent research at the British Library, focusing on innovative applications of artificial intelligence (AI) to advance sustainability initiatives. For further details, please refer to the Treasure section of this website.',
      additionalText2: 'I co-founded FlexyWork AI, a startup aiming to develop AI-driven solutions that foster environmental stewardship and advance sustainable practices. Please visit our website for more details.',
      flexyworkLink: 'https://www.flexyworkai.com/blog',
      additionalText3: 'Recently, I had the privilege of meeting Mr. Kishor Patil, CEO and Managing Director of the KPIT Group, at an event in London. We engaged in a brief but insightful discussion about my initiatives, from which I gained valuable perspectives.',
      additionalText4: 'Additionally, I had the opportunity to engage in a discussion on contemporary developments in artificial intelligence with Dr. Ajit Jaokar, a distinguished leader and educator in the field. With extensive expertise in AI for Cyber-Physical Systems, research, entrepreneurship, and academia, Dr. Jaokar currently serves as Course Director for several AI programs at University of Oxford.',
      icon: Cpu,
      color: 'from-[#3A6B35] to-[#2D5016]',
      imageSize: 'small',
      imageStyle: 'equal-height',
      images: [
        '/images/kishor_patil_meeting_new.jpg',
        '/images/ajit_jaokar_meeting.jpg'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6">
              My Quest for a
              <span className="block text-[#3A6B35] mt-2">Sustainable Future</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A journey that began with curiosity and grew into a lifelong commitment to environmental conservation.
              From childhood science experiments to impactful waste management projects, this is the story of how
              my passion for sustainability took root.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3A6B35] via-[#A4B494] to-[#3A6B35]"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline Dot */}
                <div className={`absolute left-4 top-6 w-9 h-9 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg transform -translate-x-1/2`}>
                  <event.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F3ED] rounded-full mb-3">
                        <span className="text-sm font-bold text-[#3A6B35]">{event.year}</span>
                        {event.award && <Award className="w-4 h-4 text-yellow-600" />}
                      </div>
                      <h3 className="text-2xl font-bold text-[#2C2C2C]">{event.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                    {event.description}
                  </p>

                  {event.details && (
                    <p className="text-gray-600 leading-relaxed">
                      {event.details}
                    </p>
                  )}

                  {/* Render all additional text fields if they exist, regardless of image presence */}
                  {event.additionalText && (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {event.additionalText}
                    </p>
                  )}

                  {/* Render images here if position is 'middle' */}
                  {event.images && event.images.length > 0 && event.imagesPosition === 'middle' && (
                    <div className={`mt-6 ${event.imageStyle === 'large-grid' || event.imageStyle === 'full-grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                      : event.imageStyle === 'vertical'
                        ? 'flex flex-col gap-6'
                        : event.images.length >= 2
                          ? 'grid grid-cols-2 gap-4'
                          : 'space-y-4'
                      }`}>
                      {event.images.map((img, imgIndex) => (
                        <div key={imgIndex} className={`rounded-xl overflow-hidden shadow-md border border-gray-200 ${event.imageStyle === 'equal-height' || event.imageStyle === 'large-grid'
                          ? 'h-80'
                          : ''
                          } ${event.imageSize === 'small' ? 'max-w-md mx-auto' : event.imageSize === 'extra-small' ? 'max-w-sm mx-auto' : ''}`}>
                          <img
                            src={img}
                            alt={`${event.title}`}
                            className={`w-full ${event.imageStyle === 'equal-height' || event.imageStyle === 'large-grid'
                              ? 'h-full object-cover'
                              : event.imageStyle === 'full-grid'
                                ? 'h-auto object-contain'
                                : 'h-auto'
                              }`}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {event.stageImage && (
                    <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
                      <img
                        src={event.stageImage}
                        alt="Speaking on stage"
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {event.familyImage && (
                    <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200 max-w-2xl mx-auto">
                      <img
                        src={event.familyImage}
                        alt="Family support"
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {event.additionalText2 && (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {event.additionalText2}
                      {event.flexyworkLink && (
                        <>
                          {' '}
                          <a
                            href={event.flexyworkLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3A6B35] hover:text-[#2D5016] underline font-medium transition-colors"
                          >
                            www.flexyworkai.com/blog
                          </a>
                        </>
                      )}
                    </p>
                  )}

                  {event.ministerImages && event.ministerImages.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.ministerImages.map((img, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden shadow-md border border-gray-200 h-80">
                          <img
                            src={img}
                            alt="Minister visit"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {event.additionalText3 && (
                    <>
                      {event.year === '2022-2025' && (
                        <h4 className="text-xl font-bold text-[#2C2C2C] mt-6 mb-2">Inspiring Encounters</h4>
                      )}
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {event.additionalText3}
                      </p>
                    </>
                  )}
                  {event.additionalText4 && (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {event.additionalText4}
                    </p>
                  )}
                  {event.additionalText5 && (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {event.additionalText5}
                    </p>
                  )}

                  {event.ramanImage && (
                    <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
                      <img
                        src={event.ramanImage}
                        alt="Raman Science Centre Certificate"
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {/* Render images here if position is NOT 'middle' (default) */}
                  {event.images && event.images.length > 0 && event.imagesPosition !== 'middle' && (
                    <div className={`mt-6 ${event.imageStyle === 'large-grid' || event.imageStyle === 'full-grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                      : event.imageStyle === 'vertical'
                        ? 'flex flex-col gap-6'
                        : event.images.length >= 2
                          ? 'grid grid-cols-2 gap-4'
                          : 'space-y-4'
                      }`}>
                      {event.images.map((img, imgIndex) => (
                        <div key={imgIndex} className={`rounded-xl overflow-hidden shadow-md border border-gray-200 ${event.imageStyle === 'equal-height' || event.imageStyle === 'large-grid'
                          ? 'h-80'
                          : ''
                          } ${event.imageSize === 'small' ? 'max-w-md mx-auto' : event.imageSize === 'extra-small' ? 'max-w-sm mx-auto' : ''}`}>
                          <img
                            src={img}
                            alt={`${event.title}`}
                            className={`w-full ${event.imageStyle === 'equal-height' || event.imageStyle === 'large-grid'
                              ? 'h-full object-cover'
                              : event.imageStyle === 'full-grid'
                                ? 'h-auto object-contain'
                                : 'h-auto'
                              }`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">The Quest Continues...</h3>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            These early experiences taught me that every small action counts in creating a sustainable future.
            From childhood curiosity to professional commitment, my quest to protect our planet and empower
            communities continues to drive everything I do today.
          </p>
        </div>
      </div>
    </div >
  );
}
