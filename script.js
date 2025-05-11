document.addEventListener('DOMContentLoaded', function() {
    // Configuración de partículas
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Efectos de hover para el cursor
    const hoverElements = document.querySelectorAll('a, button, .project-card, .contact-item');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(72, 149, 239, 0.5)';
            cursor.style.borderColor = 'transparent';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.borderColor = '#4895ef';
        });
    });

    // Animación de las barras de habilidades
    const skills = document.querySelectorAll('.skill');
    
    function animateSkills() {
        skills.forEach(skill => {
            const percent = skill.getAttribute('data-percent');
            const bar = skill.querySelector('.skill-bar');
            bar.style.setProperty('--width', percent + '%');
        });
    }
    
    // Activar animaciones cuando el elemento es visible
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill')) {
                    animateSkills();
                }
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in, .fade-in-up, .skill, .timeline-item, .project-card').forEach(el => {
        observer.observe(el);
    });

    // Actualizar año en el footer
    document.querySelector('.current-year').textContent = new Date().getFullYear();

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto parallax para el header
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const header = document.querySelector('header');
        
        if (header) {
            header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Tooltips para la navegación flotante
    const navItems = document.querySelectorAll('.floating-nav a');
    const tooltips = ['Sobre mí', 'Educación', 'Proyectos', 'Contacto'];
    
    navItems.forEach((item, index) => {
        item.setAttribute('data-tooltip', tooltips[index]);
    });
});
