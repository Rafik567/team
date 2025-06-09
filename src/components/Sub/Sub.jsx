import React, { useState } from 'react';
import JoinModal from '../Modal/JoinModal';

const Sub = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#2C3843] bg-no-repeat bg-[position:633px_0px] py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-4">
          Դարձեք Team բաժանորդ
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Միացե՛ք մեզ ձեր համարով և օգտվեք Team-ի բոլոր առավելություններից:
        </p>
        <div className='flex justify-center'>
          <button
            onClick={() => setOpen(true)}
            className="bg-red-400 w-[200px] rounded-[10px] text-white text-center py-3"
          >
            Միանալ
          </button>
        </div>
        <JoinModal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
};

export default Sub;
