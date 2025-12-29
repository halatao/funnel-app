type Props = {
  href?: string
  className?: string
}

export default function FreeConsultCTA({ href = '#kontakt', className = '' }: Props) {
  return (
    <a
      href={href}
      className={"block mx-auto w-full max-w-[570px] md:max-w-[690px] lg:max-w-[768px] rounded-xl bg-[#86d33a] px-4 py-3 md:py-4 lg:py-6 text-center shadow-lg hover:bg-[#76c02f] " + className}
    >
      <span className="block text-white text-lg md:text-xl lg:text-2xl font-extrabold leading-tight uppercase">VYUŽIJTE 45MINUTOVOU STRATEGICKOU KONZULTACI ZDARMA</span>
      <span className="block text-white text-xs md:text-sm mt-1 opacity-95 font-semibold">Pospěšte si! Volná místa jsou téměř pryč</span>
    </a>
  )
}
