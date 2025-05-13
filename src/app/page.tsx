"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const features = [
  {
    title: "คุณภาพมาตรฐาน",
    description: "น้ำดื่มผ่านกระบวนการผลิตที่ทันสมัย ผ่านการตรวจสอบคุณภาพตามมาตรฐาน",
    icon: "✨",
  },
  {
    title: "บริการรวดเร็ว",
    description: "จัดส่งรวดเร็วทันใจ พร้อมบริการถึงที่",
    icon: "🚚",
  },
  {
    title: "ราคาเป็นกันเอง",
    description: "ราคาสุดพิเศษสำหรับลูกค้าทุกท่าน",
    icon: "💰",
  },
  {
    title: "รับผลิตน้ำดื่ม",
    description: "รับผลิตน้ำดื่มติดแบรนด์คุณ ตามมาตรฐานโรงงาน รับประกันคุณภาพ",
    icon: "🏭",
  },
];

const products = [
  {
    id: 1,
    name: 'น้ำดื่มชนิดถัง',
    description: 'น้ำดื่มบรรจุขวดพลาสติก PET ปลอดสาร BPA',
    image: '/images/products/pic1.jpg'
  },
  {
    id: 2,
    name: 'น้ำดื่มชนิดขวด',
    description: 'น้ำดื่มขนาดพกพาสะดวก เหมาะสำหรับการเดินทาง',
    image: '/images/products/pic2.jpg'
  },
  {
    id: 3,
    name: 'น้ำดื่มชนิดแก้ว',
    description: 'น้ำดื่มถังสำหรับใช้ในครัวเรือนและสำนักงาน',
    image: '/images/products/pic4.jpg'
  },
  {
    id: 4,
    name: 'รับผลิตน้ำดื่มติดแบรนด์',
    description: 'น้ำดื่มขนาดใหญ่ เหมาะสำหรับการจัดเลี้ยง',
    image: '/images/products/pic3.jpg'
  },
];

interface TipImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null);
  const [selectedTip, setSelectedTip] = useState<TipImage | null>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const tips: TipImage[] = [
    {
      src: "/images/info/tip1.png",
      alt: "Tip 1",
      title: "ดื่มน้ำหลังตื่นนอน",
      description: "ดื่มน้ำ 1-2 แก้วหลังตื่นนอน ช่วยกระตุ้นระบบขับถ่ายและเติมความชุ่มชื้นให้ร่างกาย"
    },
    {
      src: "/images/info/tip4.png",
      alt: "Tip 2",
      title: "ดื่มน้ำก่อนมื้ออาหาร",
      description: "ดื่มน้ำ 1 แก้วก่อนมื้ออาหาร 30 นาที ช่วยให้อิ่มเร็วขึ้นและดีต่อระบบย่อยอาหาร"
    },
    {
      src: "/images/info/tip5.png",
      alt: "Tip 3",
      title: "ดื่มน้ำระหว่างวัน",
      description: "จิบน้ำบ่อยๆ ตลอดวัน อย่าปล่อยให้ร่างกายขาดน้ำ โดยเฉพาะช่วงอากาศร้อนหรือออกกำลังกาย"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ทวีชัยน้ำดื่ม
              </h1>
              <p className="text-lg mb-6">
                จัดจำหน่ายน้ำดื่มบรรจุภัณฑ์และรับผลิตน้ำดื่มติดแบรนด์ (OEM) <br />
                โรงงานมาตรฐาน อ.ปากช่อง จ.นครราชสีมา
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={scrollToProducts}
                  className="cursor-pointer bg-amber-100 hover:bg-amber-200 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 w-full sm:w-auto text-center"
                >
                  ดูสินค้า
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="mr-2">📞</span> ติดต่อเรา
                    </h3>
                    <p className="text-white">
                      044-315061, 044-316132<br />
                      081-8764800, 080-3349640<br />
                      080-8249122
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="mr-2">📍</span> ที่ตั้ง
                    </h3>
                    <a 
                      href="https://maps.app.goo.gl/bBavRpmrsv4i2nRz5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300 underline transition-colors inline-flex items-center"
                    >
                      ดูแผนที่บน Google Maps
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="lg:w-1/2 w-full flex justify-center items-start">
              <div className="relative w-full max-w-xs h-auto">
                <Image
                  src="/images/info/logo.jpg"
                  alt="Hero Image"
                  width={350}
                  height={350}
                  className="rounded-xl w-full h-auto object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900 ">
            ทำไมต้องเลือกน้ำดื่มทวีชัย (เนบิวลา)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">สินค้าของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-74">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">ประโยชน์ของการดื่มน้ำ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="relative h-48 cursor-pointer"
                  onClick={() => setSelectedTip(tip)}
                >
                  <Image
                    src={tip.src}
                    alt={tip.alt}
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedTip && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedTip(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedTip(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedTip.src}
                  alt={selectedTip.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedTip.title}</h3>
                <p className="text-gray-600">{selectedTip.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <div className="container mx-auto px-4">
              <p>
                © {new Date().getFullYear()} ทวีชัยน้ำดื่ม. สงวนลิขสิทธิ์ทุกประการ.
              </p>
        </div>
      </footer>
    </div>
  );
}
