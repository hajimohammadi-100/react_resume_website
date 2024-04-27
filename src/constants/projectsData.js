import {
    project1_1,
    project1_2,
    project1_3,
    project1_4,
    project2_1,
    project2_2,
    project2_3,
    project2_4,
    project3_1,
    project3_2,
    project3_3,
    project3_4,
    project4_1,
    project4_2,
    project4_3,
    project4_4,
    project5_1,
    project5_2,
    project5_3,
    project5_4,
    project6_1,
    project6_2,
    project6_3,
    project6_4
} from "../assets/projectsImage";

const projectsData = [
    {
        Id: 1,
        enTitle: "Blur Music",
        enRole: "DESIGNING AND DEVELOP",
        peTitle: "بلور موزیک",
        peRole: "برنامه نویسی و طراحی وبسایت",
        boxClass: "Box_project_Big",
        images: [project1_2, project1_1, project1_3, project1_4],
        peDescription: "وبسایت بلور موزیک قابلیت واکنشگرایی برای تمام حالت های موبایل، تبلت و کامپیوتر را داراست. این وبسایت به کاربران امکان پخش آنلاین موزیک و موزیک و ویدیو ها رو می دهد. به دلیل کد نویسی اصولی، این وبسایت بسیار سریع عمل می کند و تجربه بسیار لذت بخشی رو به کاربر منتقل می کنه.",
        enDescription: "The Bluer Music website features responsive design for all mobile, tablet, and computer modes. This website allows users to play music and videos online. Due to proper coding, this website operates very quickly and provides a highly enjoyable user experience.",
        peDate: "30 فروردین 1402",
        enDate: "APRIL 20, 2023",
        SharedPath:"https://blurmusic.mhhmohammadi.ir/",
        isShared: true,
        items: ["Html 5", "Jquery", "Javascript", "Css 3", "Sass"]
    },
    {
        Id: 2,
        enTitle: "Eynakmarket",
        enRole: "DESIGNING AND DEVELOP",
        peTitle: "عینک مارکت",
        peRole: "برنامه نویسی و طراحی وبسایت",
        images: [project2_1, project2_2, project2_3, project2_4],
        peDescription: "وبسایت فروشگاهی عینک مارکت این وبسایت فروش عینک و لوازم عینک را فراهم می کند و قابلیت چت آنلاین و واکنشگرایی برای تمام حالت ها  را داراست. با طراحی زیبا و مدرن، این وبسایت تجربه ای منحصر به فرد را برای بازدیدکنندگان فراهم می کند.",
        enDescription: "The Glasses Market website offers the sale of glasses and eyewear accessories. It provides online chat functionality and responsiveness for all modes, including mobile, tablet, and computer. With its beautiful and modern design, this website offers a unique experience for visitors.",
        peDate: "20 تیر 1401",
        enDate: "JULY 11, 2022",
        SharedPath:"https://eynakmarket.mhhmohammadi.ir/",
        isShared: true,
        items: ["Html 5", "Jquery", "Javascript", "Css 3"]
    },
    {
        Id: 3,
        enTitle: "Fitness Club",
        enRole: "PROGRAMMING AND DEVELOPMENT",
        peTitle: "باشگاه فیتنس",
        peRole: "برنامه نویسی و توسعه",
        images: [project5_1, project5_2, project5_3, project5_4],
        peDescription: "باشگاه فیتنس یک وبسایت پرورش اندام حرفه‌ای است با طراحی مدرن و رابط کاربری ساده، تجربه‌ای منحصر به فرد را برای کاربرانش فراهم می‌کند. وبسایت باشگاه فیتنس از آخرین تکنولوژی‌های طراحی وب استفاده می‌کند و باعث می‌شود که بارگذاری سریع و تجربه کاربری بهتری را برای کاربران فراهم کند.",
        enDescription: "Fitness Club is a professional fitness website with a modern design and simple user interface, providing a unique experience for its users. The website of the fitness club uses the latest web design technologies and provides fast loading and a better user experience for users.",
        peDate: "14 اردیبهشت 1401",
        enDate: "MAY 4, 2022",
        SharedPath:"",
        isShared: false,
        items: ["WordPress", "Elementor"]

    },
    {
        Id: 4,
        enTitle: "Jewelry Websit",
        enRole: "DESIGNING AND DEVELOP",
        peTitle: "وبسایت جواهرات",
        peRole: "برنامه نویسی و طراحی وبسایت",
        boxClass: "Box_project_Big",
        images: [project3_2, project3_1, project3_3, project3_4],
        peDescription: "وبسایت شخصی طراحی جواهرات  تجربه ای منحصر به فرد را برای بازدیدکنندگان فراهم می کند و امکان مشاهده و خرید جواهرات منحصر به فرد و دست ساز را به کاربران می دهد. همچنین این وبسایت قابلیت هایی مثل چت آنلاین و چند زبانه بودن رو داره.",
        enDescription: "A personal jewelry design website provides a unique experience for visitors and allows users to view and purchase unique and handmade jewelry. Also, this website has features such as online chat and being multilingual.",
        peDate: "3 اسفند 1401",
        enDate: "FEBRUARY 22, 2023",
        SharedPath:"https://jewelrywebsite.mhhmohammadi.ir/",
        isShared: true,
        items: ["Html 5", "Jquery", "Javascript", "Css 3"]
    },
    {
        Id: 5,
        enTitle: "Good Docter",
        enRole: "PROGRAMMING AND DEVELOPMENT",
        peTitle: "دکتر خوب",
        peRole: "برنامه نویسی و توسعه",
        boxClass: "Box_project_Big",
        images: [project6_1, project6_2, project6_3, project6_4],
        peDescription: "وبسایت دکتر خوب جدید ترین نمونه کار بنده ، که بسیار روش کار شده این وبسایت کاملا واکنشگرا هستش و به لطف کتابخانه react بسیار سرعت بالایی داره همچنین این وبسایت به یک پنل ادمین کامل مجهز هستیش که از طریق اون می توان تمام اطلاعات رو ویرایش کرد و داخلش تمام عملیات crad پیاده سازی شده",
        enDescription: "The website of Dr. Khoob is the latest example of my work, which is very methodical. This website is completely responsive and responds very quickly. Also, this website is equipped with a complete admin panel through which you can access all the information. Edited and did. All crad operations are implemented inside",
        peDate: "6 اردیبهشت 1403",
        enDate: "APRIL 25, 2024",
        SharedPath:"https://goodDoctor.mhhmohammadi.ir/",
        isShared: true,
        items: ["React", "Redux" , "Sass" , "RTKQuery"]
    },
    {
        Id: 6,
        enTitle: "Got Food",
        enRole: "FRONT-END DEVELOPMENT",
        peTitle: "گات فود",
        peRole: "برنامه نویسی فرانت اند",
        images: [project4_1, project4_2, project4_3, project4_4],
        peDescription: "وبسایت گات فود به کاربران امکان سفارش آنلاین غذا را می دهد و قابلیت چت آنلاین و واکنشگرایی برای تمام حالت های موبایل، تبلت و کامپیوتر را داراست. این وبسایت به دلیل برنامه نویسی اصولی که داره سرعت بالایی داره و به کاربران امکان سفارش آنلاین غذا را می دهد.",
        enDescription: "The Got Food website allows users to order food online and features online chat and responsiveness for all mobile, tablet, and computer modes. This website operates at a high speed due to proper coding and provides users with the ability to order food online.",
        peDate: "7 شهریور 1400",
        enDate: "AUGUST 29, 2021",
        SharedPath:"",
        isShared: false,
        items: ["Html 5", "Bootstrap", "Javascript", "Css 3"]
    }
]

const getProject = (peojectId) => {
    return projectsData.find(p => p.Id === peojectId);
}

export { projectsData, getProject }