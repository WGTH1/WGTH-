function changePage(pageId) {
    // ซ่อนทุก section ที่ไม่ใช่ pageId
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== pageId.substring(1)) {
            section.classList.remove('active');
        }
    });

    // แสดง section ที่มี id เป็น pageId
    const nextPage = document.querySelector(pageId);
    nextPage.classList.add('active');

    // ลบคลาส 'active' จากทุกลิงค์
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });

    // เพิ่มคลาส 'active' ให้กับลิงค์ที่เป็น 'active' ในเมนู
    document.querySelector(pageId + '-link').classList.add('active');

    // เพิ่ม animation class เมื่อเปลี่ยนหน้า
    nextPage.classList.add('page-enter');

    // ลบ animation class ออกหลังจาก animation เสร็จสิ้น
    setTimeout(() => {
        nextPage.classList.remove('page-enter');
    }, 1000); // ระยะเวลาของ animation ใน milliseconds (เท่ากับ transition duration)
}

function navigatePage(direction) {
    const sections = document.querySelectorAll('section');
    let currentIndex = -1;

    sections.forEach((section, index) => {
        if (section.classList.contains('active')) {
            currentIndex = index;
        }
    });

    const currentLink = document.querySelector('nav a.active');
    if (currentLink) {
        currentLink.classList.remove('active');
    }

    if (direction === 'left' && currentIndex > 0) {
        sections[currentIndex].classList.remove('active');
        sections[currentIndex - 1].classList.add('active');
        document.querySelector(`#${sections[currentIndex - 1].id}-link`).classList.add('active');
    } else if (direction === 'right' && currentIndex < sections.length - 1) {
        sections[currentIndex].classList.remove('active');
        sections[currentIndex + 1].classList.add('active');
        document.querySelector(`#${sections[currentIndex + 1].id}-link`).classList.add('active');
    }

    // ตรวจสอบตำแหน่งปัจจุบันและปรับ animation
    const nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    const nextPage = sections[nextIndex];

    // เพิ่ม animation class เพื่อทำให้เกิดการเคลื่อนไหว
    nextPage.classList.add('page-enter');

    // ลบ animation class หลังจากที่ animation เสร็จสิ้น
    setTimeout(() => {
        nextPage.classList.remove('page-enter');
    }, 1000); // ระยะเวลาของ animation ใน milliseconds (เท่ากับ transition duration)
}

// JavaScript to handle arrow clicks and image/text display

document.addEventListener('DOMContentLoaded', function () {
    const arrows = document.querySelectorAll('.arrow');
    const overlays = document.querySelectorAll('.overlay');

    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', function () {
            // Toggle visibility of overlay
            overlays[index].classList.toggle('active');
        });
    });
});
