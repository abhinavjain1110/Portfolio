const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    
    // New styles for portfolio cards
    portfolioCard: 
      "bg-tertiary rounded-2xl p-6 h-[200px] flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20",
    
    // Enhanced navigation styles
    navLink:
      "relative text-[16px] font-medium cursor-pointer transition-colors duration-300 hover:text-[#915eff]",
    
    // Container styles
    container:
      "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    
    // Gradient styles
    gradientText:
      "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
    
    // Animation styles
    fadeIn:
      "animate-fadeIn",
    slideUp:
      "animate-slideUp",
  };
  
  export { styles };