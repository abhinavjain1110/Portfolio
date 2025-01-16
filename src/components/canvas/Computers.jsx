import { Suspense, useEffect, useState } from 'react';
import { Canvas, events } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <>
    <mesh>
      <hemisphereLight intensity={4} groundColor="black"/>
      <pointLight intensity={50}/>
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.40 : 0.65}
          position={isMobile ? [0,-3,-0.5] : [0, -4.25, 4.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile,setIsMobile]=useState(false);

  useEffect(() => {
    const mediaQuery=window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange =(event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[]) 

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 4, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
