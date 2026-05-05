document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Data embedded directly to avoid CORS issues when opening locally
    const portfolioData = {
        "personal": {
            "name": "YAKAM KEMAJOU JEAN PIERRE DIMITRI",
            "title": "Full Stack Developer & Computer Engineering Student",
            "tagline": "Crafting robust and scalable digital experiences with modern technologies",
            "bio": "I'm a passionate Full Stack Developer and Computer Engineering student at the University of Trieste. I specialize in building high-performance web and mobile applications using a wide array of modern frameworks and languages. From social networks to educational platforms, I love turning complex problems into elegant solutions.",
            "location": "Trieste, Italy",
            "email": "yakamdimitri@gmail.com",
            "phone": "+39 392 700 1843",
            "avatar": "images/newprofile.png",
            "resume_url": "newcv.pdf"
        },
        "social": {
            "github": "https://github.com/yakamkemajoujeanpierredimitri",
            "linkedin": "https://www.linkedin.com/in/dimitri-yakam-121443381"
        },
        "about": {
            "description": "I'm currently pursuing my Bachelor's in Computer Engineering at the University of Trieste. I have a strong foundation in both frontend and backend development, with a particular interest in real-time systems and scalable architectures. My goal is to leverage my diverse technical stack to build impactful applications that solve real-world problems.",
            "characteristics": ["Disciplined", "Fast Learner", "Adaptable", "Goal-oriented", "Collaborative"]
        },
        "skills": [
            {
                "category": "Programming Languages",
                "items": [
                    { "name": "Java" }, { "name": "C#" }, { "name": "JavaScript" }, 
                    { "name": "TypeScript" }, { "name": "Python" }, { "name": "PHP" }, 
                    { "name": "Dart" }, { "name": "HTML5/CSS3" }
                ]
            },
            {
                "category": "Frameworks & Runtimes",
                "items": [
                    { "name": "ExpressJS" }, { "name": "NestJS" }, { "name": "Next.js" }, 
                    { "name": "Astro.js" }, { "name": "Bun.js" }, { "name": "Spring Boot" }, 
                    { "name": "React" }, { "name": "React Native" }, { "name": ".NET" }
                ]
            },
            {
                "category": "Databases",
                "items": [
                    { "name": "SQL" }, { "name": "SQLite" }, { "name": "Turso" }, 
                    { "name": "MongoDB" }, { "name": "PostgreSQL" }
                ]
            },
            {
                "category": "Concepts & Utilities",
                "items": [
                    { "name": "Git" }, { "name": "Socket.io" }, { "name": "Docker" }, 
                    { "name": "Cloudinary" }, { "name": "Resend" }, { "name": "Cloudflare" }
                ]
            }
        ],
        "projects": [
            {
                "id": "project-vicini",
                "title": "Vicini.blog",
                "short_description": "An Italian blog platform for community sharing and communication.",
                "thumbnail": "images/logo.png",
                "tags": ["Web Development", "Community", "Blog"],
                "links": { "live": "https://www.vicini.blog" }
            },
            {
                "id": "project-social-mobile",
                "title": "Social Network App",
                "short_description": "Cross-platform mobile social network built with React Native.",
                "thumbnail": "images/yak.png",
                "tags": ["React Native", "Mobile", "Socket.io", "Social"],
                "links": { "github": "https://github.com/yakamkemajoujeanpierredimitri/social_app" ,
                     "live":"https://social-app-two-olive.vercel.app/" }
            },
            {
                "id": "project-cama",
                "title": "CAMA - Educational Platform",
                "short_description": "Full-stack platform for the CAMA association's events and formations.",
                "thumbnail": "images/cama.jpg",
                "tags": ["Full Stack", "Education", "Backend", "E-commerce"],
                "links": { 
                    "live": "https://cam-ameli.vercel.app",
                    "github": "https://github.com/yakamkemajoujeanpierredimitri/CAMAmeli"
                }
            }
        ]
    };

    renderPortfolio(portfolioData);

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.75rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });

    function renderPortfolio(data) {
        // Hero section
        document.getElementById('owner-name').textContent = data.personal.name;
        document.getElementById('owner-tagline').textContent = data.personal.tagline;
        document.getElementById('avatar').src = data.personal.avatar;

        // About section
        document.getElementById('about-description').textContent = data.about.description;
        const characteristicsContainer = document.getElementById('about-characteristics');
        data.about.characteristics.forEach(char => {
            const span = document.createElement('span');
            span.classList.add('char-tag');
            span.textContent = char;
            characteristicsContainer.appendChild(span);
        });

        // Skills section
        const skillsGrid = document.getElementById('skills-grid');
        data.skills.forEach(skillCategory => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skill-category');
            
            const title = document.createElement('h3');
            title.textContent = skillCategory.category;
            categoryDiv.appendChild(title);

            const skillList = document.createElement('div');
            skillList.classList.add('skill-list');

            skillCategory.items.forEach(skill => {
                const item = document.createElement('span');
                item.classList.add('skill-item');
                item.textContent = skill.name;
                skillList.appendChild(item);
            });

            categoryDiv.appendChild(skillList);
            skillsGrid.appendChild(categoryDiv);
        });

        // Projects section
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            const img = document.createElement('img');
            img.src = project.thumbnail || 'https://via.placeholder.com/400x250';
            img.alt = project.title;
            img.classList.add('project-img');
            card.appendChild(img);

            const content = document.createElement('div');
            content.classList.add('project-content');

            const tags = document.createElement('div');
            tags.classList.add('project-tags');
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.classList.add('tag');
                span.textContent = `#${tag}`;
                tags.appendChild(span);
            });
            content.appendChild(tags);

            const title = document.createElement('h3');
            title.textContent = project.title;
            content.appendChild(title);

            const desc = document.createElement('p');
            desc.textContent = project.short_description;
            content.appendChild(desc);

            const links = document.createElement('div');
            links.classList.add('project-links');
            
            if (project.links.github) {
                const github = document.createElement('a');
                github.href = project.links.github;
                github.target = '_blank';
                github.innerHTML = '<i class="fab fa-github"></i>';
                links.appendChild(github);
            }

            if (project.links.live) {
                const live = document.createElement('a');
                live.href = project.links.live;
                live.target = '_blank';
                live.innerHTML = '<i class="fas fa-external-link-alt"></i>';
                links.appendChild(live);
            }

            content.appendChild(links);
            card.appendChild(content);
            projectsContainer.appendChild(card);
        });

        // Contact section
        const emailLink = document.getElementById('contact-email');
        emailLink.textContent = data.personal.email;
        
        const phoneSpan = document.getElementById('contact-phone');
        phoneSpan.textContent = data.personal.phone;

        const socialLinks = document.getElementById('social-links');
        for (const [key, value] of Object.entries(data.social)) {
            const link = document.createElement('a');
            link.href = value;
            link.target = '_blank';
            link.innerHTML = `<i class="fab fa-${key}"></i>`;
            socialLinks.appendChild(link);
        }
    }
});
