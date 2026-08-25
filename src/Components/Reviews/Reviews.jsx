import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  ['Sarah Johnson', 'Marketing Director', 5, 'This product completely transformed our workflow. The team is more productive than ever before!', 'women/44'],
  ['Michael Chen', 'Software Engineer', 4, 'Great features and excellent performance. The customer support team is very responsive and helpful.', 'men/32'],
  ['Emma Williams', 'Small Business Owner', 5, 'Easy to use and affordable. It has everything I need to manage my business efficiently.', 'women/68'],
  ['David Rodriguez', 'Freelance Designer', 5, 'The intuitive interface saves me hours every week. Highly recommended for creative professionals.', 'men/75'],
  ['Priya Patel', 'HR Manager', 4, 'Our onboarding process is now 50% faster thanks to this solution. The team loves it!', 'women/82'],
  ['Olivia Martin', 'Product Manager', 5, 'A beautifully considered experience that made our daily work feel dramatically lighter.', 'women/12'],
  ['James Wilson', 'Startup Founder', 5, 'The clarity and speed helped our small team move from idea to launch with confidence.', 'men/41'],
  ['Ava Thompson', 'UX Researcher', 5, 'It is thoughtful, fast, and genuinely pleasant to use every single day.', 'women/31'],
  ['Noah Anderson', 'Creative Director', 4, 'The details are excellent and the whole experience feels remarkably polished.', 'men/22'],
  ['Sophia Thomas', 'Content Strategist', 5, 'We finally have a workflow that matches the way our creative team actually thinks.', 'women/49'],
  ['Liam Jackson', 'Frontend Developer', 5, 'Simple setup, excellent performance, and enough flexibility for our most ambitious work.', 'men/51'],
  ['Isabella White', 'Brand Consultant', 5, 'Our client presentations feel more confident because the process is now so organized.', 'women/65'],
  ['Lucas Harris', 'Operations Lead', 4, 'The automation saved our team hours and removed a surprising amount of repetitive work.', 'men/61'],
  ['Mia Martin', 'Art Director', 5, 'The interface has a rare balance of personality, focus, and effortless usability.', 'women/25'],
  ['Ethan Thompson', 'Consultant', 5, 'A reliable tool that feels fast even when our projects become complex.', 'men/36'],
  ['Amelia Garcia', 'Community Manager', 4, 'Our team adopted it immediately because every interaction makes intuitive sense.', 'women/16'],
  ['Mason Martinez', 'Agency Owner', 5, 'We deliver work faster now without compromising the quality our clients expect.', 'men/14'],
  ['Harper Robinson', 'Visual Designer', 5, 'The visual polish is impressive, but the thoughtful workflow is what keeps us coming back.', 'women/56'],
  ['Logan Clark', 'Data Analyst', 4, 'Clear, quick, and dependable. It became part of our process in the first week.', 'men/45'],
  ['Evelyn Lewis', 'Founder', 5, 'It gave our growing team structure without making the work feel rigid.', 'women/33'],
  ['Alexander Lee', 'Engineering Manager', 5, 'Our handoffs are smoother and our team spends more time building instead of coordinating.', 'men/63'],
  ['Luna Walker', 'Photographer', 5, 'The experience feels made for people who care about both speed and beautiful details.', 'women/29'],
  ['Sebastian Hall', 'Sales Director', 4, 'The reporting is clear enough to act on, not just admire.', 'men/18'],
  ['Camila Allen', 'Business Coach', 5, 'It helped me turn scattered ideas into a repeatable, professional process.', 'women/71'],
  ['Mateo Young', 'Mobile Developer', 5, 'Fast, responsive, and surprisingly elegant across every screen we tested.', 'men/57'],
  ['Aria Hernandez', 'Social Media Lead', 4, 'The team engagement improved because the product is genuinely enjoyable to open.', 'women/42'],
  ['Henry King', 'Product Designer', 5, 'Every screen feels intentional. It is the kind of product designers love to recommend.', 'men/72'],
  ['Ella Wright', 'Nonprofit Director', 5, 'It gave our small organization professional tools without a painful learning curve.', 'women/73'],
  ['Jackson Lopez', 'Solutions Architect', 4, 'Flexible enough for our systems and simple enough for everyone to understand.', 'men/64'],
  ['Nora Hill', 'Recruiter', 5, 'The experience made our candidate workflow faster, clearer, and much more human.', 'women/24'],
  ['Aiden Scott', 'E-commerce Owner', 5, 'We saw an immediate improvement in organization and follow-through across the team.', 'men/31'],
  ['Grace Green', 'Editorial Director', 4, 'The details feel refined without getting in the way of the work.', 'women/37'],
  ['Samuel Adams', 'Cloud Engineer', 5, 'A dependable foundation that performs beautifully under real-world pressure.', 'men/38'],
  ['Chloe Baker', 'Event Producer', 5, 'The workflow is smooth enough to keep up with our busiest weeks.', 'women/9'],
  ['Owen Nelson', 'Growth Lead', 4, 'It brought the right information together at exactly the right moment.', 'men/9'],
  ['Zoe Carter', 'Illustrator', 5, 'A rare tool that feels powerful, warm, and easy to make your own.', 'women/19'],
  ['Wyatt Mitchell', 'Finance Manager', 5, 'The improved visibility helped us make faster decisions with less back-and-forth.', 'men/27'],
  ['Stella Perez', 'Customer Success Lead', 4, 'Our clients notice the difference because our responses are now much more consistent.', 'women/68'],
  ['Jack Roberts', 'DevOps Engineer', 5, 'The product is fast, stable, and thoughtfully designed from the ground up.', 'men/68'],
  ['Violet Turner', 'Studio Manager', 5, 'It feels like a calm, capable partner for a very busy creative team.', 'women/76'],
  ['Leo Phillips', 'Digital Strategist', 4, 'The results are easy to understand and the experience never wastes our time.', 'men/79']
].map(([name, role, rating, comment, avatar], index) => ({
  id: index + 1,
  name,
  role,
  rating,
  comment,
  avatar: `https://randomuser.me/api/portraits/${avatar}.jpg`
}));

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction === 'right' ? 90 : -90,
        rotateY: direction === 'right' ? 8 : -8,
        scale: 0.96,
        opacity: 0
      };
    },
    center: {
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction === 'right' ? -90 : 90,
        rotateY: direction === 'right' ? -8 : 8,
        scale: 0.96,
        opacity: 0
      };
    }
  };

  return (
    <section id='reviews' className="animated-bg relative min-h-dvh overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        className='pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-amber-300/20'
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ rotate: { duration: 24, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className='pointer-events-none absolute -left-32 bottom-24 h-80 w-80 rounded-full border border-indigo-300/15'
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='relative z-10 mx-auto mb-10 max-w-3xl text-center sm:mb-12'
      >
        <p className='mb-3 font-mono text-sm uppercase tracking-[0.3em] text-amber-300'>40 voices</p>
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          What people say
        </h2>
        <p className='mx-auto mt-4 max-w-xl text-gray-300'>A rotating wall of feedback from people who care about thoughtful digital work.</p>
      </motion.div>
      
      <div
        className="relative z-10 mx-auto h-104 max-w-3xl overflow-hidden perspective-distant sm:h-96"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <motion.button
          type='button'
          onClick={prevSlide}
          whileHover={{ scale: 1.12, x: -2 }}
          whileTap={{ scale: 0.92 }}
          aria-label='Previous review'
          className='absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gray-800/90 text-gray-300 shadow-lg transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black sm:left-2 sm:h-12 sm:w-12'
        >
          <FaChevronLeft className='h-5 w-5' />
        </motion.button>
        <motion.button
          type='button'
          onClick={nextSlide}
          whileHover={{ scale: 1.12, x: 2 }}
          whileTap={{ scale: 0.92 }}
          aria-label='Next review'
          className='absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gray-800/90 text-gray-300 shadow-lg transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black sm:right-2 sm:h-12 sm:w-12'
        >
          <FaChevronRight className='h-5 w-5' />
        </motion.button>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragDirectionLock
            whileDrag={{ scale: 0.98, cursor: 'grabbing' }}
            onDragEnd={(_, info) => {
              const swipeDistance = Math.abs(info.offset.x);
              const swipeVelocity = Math.abs(info.velocity.x);

              if (swipeDistance > 50 || swipeVelocity > 300) {
                if (info.offset.x < 0) {
                  nextSlide();
                } else {
                  prevSlide();
                }
              }
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.8 }}
            className="absolute inset-0 flex cursor-grab touch-pan-y items-center justify-center px-8 sm:px-12"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-gray-800/90 p-6 shadow-2xl shadow-black/30 sm:p-8"
            >
              <div className='mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-amber-300'>
                <span>Client note</span>
                <span>{String(currentIndex + 1).padStart(2, '0')} / 40</span>
              </div>
              <div className="mb-6 flex items-center">
                <img 
                  src={reviews[currentIndex].avatar} 
                  alt={reviews[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-gray-400">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`h-5 w-5 ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              
              <p className="text-base italic text-gray-300 sm:text-lg">
                "{reviews[currentIndex].comment}"
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
       
      <div className="relative z-10 mx-auto mt-8 max-w-3xl">
        <div className='mb-4 h-1 overflow-hidden rounded-full bg-white/10'>
          <motion.div
            key={currentIndex}
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='h-full rounded-full bg-amber-400'
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
