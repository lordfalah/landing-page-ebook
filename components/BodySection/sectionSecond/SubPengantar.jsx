import React from "react";
import Paragraf from "../../font/Paragraf";

const SubPengantar = () => {
  return (
    <div className="lg:col-span-2">
      <Paragraf
        className="text-white md:tracking-wide text-lg xl:text-xl  
        lg:leading-9 xl:leading-10 text-justify"
        variants="textNormal"
      >
        &quot;Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
        website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
        Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang lebih
        lama ketika membangun sebuah website dengan utility-first framework
        ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus
        memikirkan desain dan mengimplementasikan desain tersebut dari awal
        sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan oleh
        utility-first framework, sehingga kamu dapat mempertimbangkannya. Dalam
        buku ini, kita akan mempelajari framework Tailwind CSS. Mulai dari
        konsep, workflow, hingga membuat sebuah website responsive dengan
        TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu memahami
        cara mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa
        dibilang kamu sudah pernah membangun website sebelumnya dan ingin
        mempelajari hal baru untuk meningkatkan skill.&quot;
      </Paragraf>
    </div>
  );
};

export default SubPengantar;
