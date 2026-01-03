//Navbar-Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
};  

//Hambuger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Active Link State
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }

    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('nav-active');
        }
    });
};

//Alert Contact Send
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        Swal.fire({
            title: "Success!",
            text: "Message sent! Thank you for reaching out.",
            icon: "success",
            confirmButtonColor: "#083344", 
        });

        this.reset(); 
    });
}

//Modal Reflection Portofolio
function showReflection(title, imageUrl, type, role, tools, what, soWhat, nowWhat, journalUrl = null) {
    const journalButton = journalUrl 
        ? `<div class="mt-8 flex flex-row justify-center items-center gap-4">
                ${journalUrl ? `
                <a href="${journalUrl}" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-full text-xs tracking-widest transition duration-300 flex items-center gap-2 m-0">
                    </i> Read Full Journal
                </a>
                ` : ''}

                <button onclick="Swal.close()" class="bg-[#083344] hover:opacity-80 text-white font-bold py-2.5 px-8 rounded-full text-xs tracking-widest transition duration-300 m-0">
                    Finished Reading
                </button>
            </div>` 
        : '';

    Swal.fire({
        title: '',
        position: 'top',
        html: `
            <div class="text-left px-2">
                <div class="flex flex-col md:flex-row items-center gap-6 mb-6 border-b pb-6">
                    <div class="flex-1 text-center md:text-left">
                        <span class="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">${type}</span>
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">${title}</h2>
                    </div>
                    <div class="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg border-4 border-white h-44">
                        <img src="${imageUrl}" alt="${title}" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                    </div>
                </div>

                <div class="grid grid-cols-[100px_10px_1fr] gap-y-2 text-sm md:text-base mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div class="font-bold text-slate-700">Role</div>
                    <div>:</div>
                    <div class="text-slate-600">${role}</div>
                    <div class="font-bold text-slate-700">Tools</div>
                    <div>:</div>
                    <div class="text-slate-600">${tools}</div>
                </div>

                <h4 class="font-bold text-cyan-950 mb-4 text-center tracking-[0.3em] text-xs uppercase">Academic Reflection</h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed">
                    <div class="bg-white p-4 rounded-lg border-l-4 border-cyan-700 shadow-sm">
                        <p class="font-bold text-cyan-800 uppercase text-[10px] tracking-wider mb-2">🔍 What?</p>
                        <p class="text-slate-600 text-justify">${what}</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border-l-4 border-cyan-700 shadow-sm">
                        <p class="font-bold text-cyan-800 uppercase text-[10px] tracking-wider mb-2">💡 So What?</p>
                        <p class="text-slate-600 text-justify">${soWhat}</p>
                    </div>
                    <div class="md:col-span-2 bg-white p-4 rounded-lg border-l-4 border-orange-400 shadow-sm">
                        <p class="font-bold text-orange-600 uppercase text-[10px] tracking-wider mb-2">🚀 Now What?</p>
                        <p class="text-slate-600 text-justify">${nowWhat}</p>
                    </div>
                </div>

                ${journalButton}
            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true,
        confirmButtonColor: '#083344',
        confirmButtonText: 'Finished Reading',
        width: '1100px',
        customClass: { popup: 'mt-28 rounded-3xl' }
    });
}