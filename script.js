document.addEventListener('DOMContentLoaded', () => {
    fetch('portofoglio.json')
        .then(response => response.json())
        .then(data => {
            // Populate header
            document.getElementById('owner-name').textContent = data.personal.name;
            document.getElementById('owner-title').textContent = data.personal.title;
            document.getElementById('avatar').src = data.personal.avatar || 'https://via.placeholder.com/150';
            document.getElementById('resume-download').href = data.personal.resume_url;

            // Populate about section
            document.getElementById('about-description').textContent = data.about.description;
            const interestsList = document.getElementById('about-interests');
            data.about.interests.forEach(interest => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${interest}`;
                interestsList.appendChild(li);
            });

            // Populate skills section
            const skillsContainer = document.getElementById('skills-container');
            data.skills.forEach(skillCategory => {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('skill-category');
                const categoryTitle = document.createElement('h3');
                categoryTitle.textContent = skillCategory.category;
                categoryDiv.appendChild(categoryTitle);
                const skillList = document.createElement('ul');
                skillCategory.items.forEach(skill => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-star"></i> ${skill.name}`;
                    skillList.appendChild(li);
                });
                categoryDiv.appendChild(skillList);
                skillsContainer.appendChild(categoryDiv);
            });

            // Populate projects section
            const projectsContainer = document.getElementById('projects-container');
            data.projects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                const projectImage = document.createElement('img');
                projectImage.src = project.thumbnail || `https://picsum.photos/seed/${index + 1}/400/300`;
                projectImage.alt = project.title;
                projectCard.appendChild(projectImage);
                const projectContent = document.createElement('div');
                projectContent.classList.add('project-card-content');
                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.title;
                projectContent.appendChild(projectTitle);
                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.short_description;
                projectContent.appendChild(projectDescription);
                const projectLinks = document.createElement('div');
                projectLinks.classList.add('project-links');
                if (project.links.github) {
                    const githubLink = document.createElement('a');
                    githubLink.href = project.links.github;
                    githubLink.target = '_blank';
                    githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
                    projectLinks.appendChild(githubLink);
                }
                if (project.links.live) {
                    const liveLink = document.createElement('a');
                    liveLink.href = project.links.live;
                    liveLink.target = '_blank';
                    liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
                    projectLinks.appendChild(liveLink);
                }
                projectContent.appendChild(projectLinks);
                projectCard.appendChild(projectContent);
                projectsContainer.appendChild(projectCard);
            });

            // Populate experience section
            const experienceContainer = document.getElementById('experience-container');
            data.experience.forEach(job => {
                const jobDiv = document.createElement('div');
                jobDiv.classList.add('job');
                const jobTitle = document.createElement('h3');
                jobTitle.innerHTML = `<i class="fas fa-briefcase"></i> ${job.position} at ${job.company}`;
                jobDiv.appendChild(jobTitle);
                const jobDates = document.createElement('p');
                jobDates.textContent = `${job.start_date} - ${job.end_date || 'Present'}`;
                jobDiv.appendChild(jobDates);
                const jobDescription = document.createElement('p');
                jobDescription.textContent = job.description;
                jobDiv.appendChild(jobDescription);
                experienceContainer.appendChild(jobDiv);
            });

            // Populate education section
            const educationContainer = document.getElementById('education-container');
            data.education.forEach(edu => {
                const eduDiv = document.createElement('div');
                eduDiv.classList.add('education-item');
                const eduDegree = document.createElement('h3');
                eduDegree.innerHTML = `<i class="fas fa-graduation-cap"></i> ${edu.degree}`;
                eduDiv.appendChild(eduDegree);
                const eduInstitution = document.createElement('p');
                eduInstitution.textContent = `${edu.institution} (${edu.start_date} - ${edu.end_date || 'Present'})`;
                eduDiv.appendChild(eduInstitution);
                educationContainer.appendChild(eduDiv);
            });

            // Populate certifications section
            const certificationsContainer = document.getElementById('certifications-container');
            data.certifications.forEach(cert => {
                const certDiv = document.createElement('div');
                certDiv.classList.add('certification-item');
                const certName = document.createElement('h3');
                certName.innerHTML = `<i class="fas fa-award"></i> ${cert.name}`;
                certDiv.appendChild(certName);
                const certIssuer = document.createElement('p');
                certIssuer.textContent = `Issuer: ${cert.issuer} (${cert.date})`;
                certDiv.appendChild(certIssuer);
                certificationsContainer.appendChild(certDiv);
            });

            // Populate contact section
            const emailLink = document.getElementById('contact-email');
            emailLink.href = `mailto:${data.personal.email}`;
            emailLink.innerHTML = `<i class="fas fa-envelope"></i> ${data.personal.email}`;
            document.getElementById('contact-phone').innerHTML = `<i class="fas fa-phone"></i> ${data.personal.phone}`;

            // Populate social links
            const socialLinksContainer = document.getElementById('social-links');
            for (const [key, value] of Object.entries(data.social)) {
                
                const link = document.createElement('a');
                link.href = value;
                link.target = '_blank';
                link.innerHTML = `<i class="fab fa-${key}"></i>`;
                socialLinksContainer.appendChild(link);
            }

            // Theme toggle
            const themeToggle = document.createElement('button');
            themeToggle.id = 'theme-toggle';
            themeToggle.innerHTML = '🌓';
            document.body.appendChild(themeToggle);

            if (data.theme.dark_mode) {
                document.body.classList.add('dark-mode');
            }

            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
            });
        });
});