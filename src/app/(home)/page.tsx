import dynamic from "next/dynamic";



const DynamicLogo = dynamic(() => import('../components/Logo'));
const DynamicLanding =dynamic(() => import('../components/Landing'));


export default function Home() {
  return (
    <>
      <DynamicLogo />
      <DynamicLanding />
    </>
  );
}
