import Typewriter from "typewriter-effect";

export default function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight md:leading-[1.15]">
      Empowering the Future with{" "}
      <Typewriter
        options={{
          strings: [
            '<span>Blockchain</span>',
            '<span>AI Development</span>',
            '<span>Web3 Innovation</span>',
            '<span>Game Development</span>',
            '<span>Crypto Exchange Development</span>',

          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </h1>
  );
}
