import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image src="/loader.gif" height={150} width={150} alt="Loading..." />
    </div>
  );
}
