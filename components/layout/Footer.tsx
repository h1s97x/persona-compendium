import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-p5r-red">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="h-16 w-32 relative">
            <Image src="/images/logos/sega_logo_s.webp" alt="SEGA" fill sizes="128px" className="object-contain" />
          </div>
          <div className="h-16 w-32 relative">
            <Image src="/images/logos/atlus_logo.webp" alt="ATLUS" fill sizes="128px" className="object-contain" />
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>本页面为个人网页设计作业，与ATLUS无关，与SEGA无关</p>
          <p>©ATLUS ©SEGA All rights reserved.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="h-12 w-24 relative">
            <Image src="/images/platforms/ps5_logo.webp" alt="PS5" fill sizes="96px" className="object-contain" />
          </div>
          <div className="h-12 w-24 relative">
            <Image src="/images/platforms/steam_logo.webp" alt="Steam" fill sizes="96px" className="object-contain" />
          </div>
          <div className="h-12 w-24 relative">
            <Image src="/images/platforms/switch_logo.webp" alt="Switch" fill sizes="96px" className="object-contain" />
          </div>
          <div className="h-12 w-24 relative">
            <Image src="/images/platforms/xbox_xs_logo.webp" alt="Xbox" fill sizes="96px" className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
