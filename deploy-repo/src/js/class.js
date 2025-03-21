document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;

  const main = document.getElementById('main');

  let title = '';
  let img = '';
  let icon = '';
  let icon1 = '';
  let icon2 = '';
  let icon3 = '';
  let overview = '';
  let title1 = '';
  let list1 = '';
  let title2 = '';
  let list2 = '';
  let title3 = '';
  let list3 = '';
  let title4 = '';
  let list4 = '';
  let title5 = '';
  let list5 = '';
  let title6 = '';
  let list6 = '';
  let div1 = '';
  let title7 = '';
  let list7 = '';
  let div2 = '';
  let title8 = '';
  let list8 = '';
  let div3 = '';
  let title9 = '';
  let list9 = '';
  let div4 = '';
  let title10 = '';
  let list10 = '';
  let classLink = './contact.html?type=class&class=';

  if (pathname.includes('1on1')) {
    title = '1-on-1 Master Class';
    img = './images/classes/c29f623fa08c045a68cec121b174d9ce.png';
    icon = 'CAD 1,500';
    icon1 = 'On-demand mentorship';
    icon2 = 'Future Professionals';
    icon3 = 'Tools included';
    overview =
      'Led by experienced makeup artists, this exclusive class is for individuals seeking personalized attention and guidance on advanced techniques to elevate your artistry to a professional level';
    title1 = 'Personal Consultation';
    list1 = `
      <li>Discuss participant's Goals, skill level, and areas of interest</li>
      <li>Analyze participant's current makeup techniques and products</li>
    `;
    title2 = 'Customized Makeup Theory';
    list2 = `<li>In-depth discussion on advanced makeup techniques</li>
              <li>Understanding facial anatomy and bone structure</li>
              <li>
                Color theory and product selection tailored to participant's
                preferences
              </li>`;
    title3 = 'Hands-on Practical Application';
    list3 = `<li>Step-by-step demonstration of advanced makeup techniques</li>
              <li>
                Focus on refining application skills and achieving desired looks
              </li>`;
    title4 = "Specialized Topics (Choose based on participant's interest)";
    list4 = `<li>Advanced contouring and highlighting techniques</li>
              <li>Creative eye makeup (smoky eyes, cut crease, etc.)</li>
              <li>
                Flawless complexion techniques (perfecting skin texture, color
                correction)
              </li>
              <li>Mastering lip artistry (ombre lips, lip contouring, etc.)</li>
              <li>Bridal or special occasion makeup</li>
              <li>Editorial or avant-garde makeup</li>`;
    title5 = 'Business and Career Guidance';
    list5 = `<li>Portfolio review and feedback</li>
              <li>Marketing strategies for freelance makeup artists</li>
              <li>Client consultation skills</li>
              <li>Pricing and business management advice</li>`;
    title6 = 'Conclusion and Future Support';
    list6 = `<li>
                Resource recommendations for further learning and practice
              </li>
              <li>Continued support and mentorship options available</li>`;
    classLink += '1on1';
  } else if (pathname.includes('1day')) {
    title = 'Professional 1-Day Makeup Workshop';
    img = './images/classes/b6f93ef64d67c674c5f1af25fe89d1d5.png';
    icon = 'CAD 800';
    icon1 = '8 hrs';
    icon2 = 'Emerging Professionals';
    icon3 = 'Tools included';
    overview =
      'Designed for aspiring makeup artists to develop their skills and techniques in the art of makeup application. The workshop will provide hands-on techniques and practical knowledge to enhance your makeup artistry';
    title1 = 'Introduction to Makeup Artistry';
    list1 = `
    <li>Overview of different makeup styles (natural, glamorous, editorial, etc.)</li>
    <li>Importance of proper skincare as the foundation of makeup application</li>
    <li> Understanding different skin types and tones </li>
  `;
    title2 = 'Essential Tools and Products';
    list2 = `<li>Makeup brushes and their uses</li>
              <li>Understanding different makeup products (foundations, concealers, powders, etc.)</li>
              <li>
                Importance of hygiene and sanitization in makeup application
              </li>
              <li>Building a professional makeup kit on a budget
</li>`;
    title3 = 'Foundation and Base Makeup Techniques';
    list3 = `<li>Choosing the right foundation shade and formulation</li>
              <li>
                Techniques for flawless foundation application (brush, sponge, fingers)
              </li>
              <li>Concealing imperfections and correcting skin tone</li>
              <li>Setting foundation with powders for longevity</li>`;
    title4 = 'Eye Makeup Techniques';
    list4 = `<li>Introduction to eye makeup products (eyeshadows, eyeliners, mascara)</li>
              <li>Eyebrow shaping and filling techniques</li>
              <li>
                Basic eyeshadow application (transition, crease, lid, brow bone)
              </li>
              <li>Eyeliner techniques (winged, tightline, waterline)</li>
            `;
    title5 = 'Contouring, Highlighting, and Blush';
    list5 = `<li>Understanding facial anatomy for contouring and highlighting</li>
              <li>Contouring techniques for different face shapes</li>
              <li>Highlighting to enhance facial features</li>
              <li>Blush application for a natural flush</li>`;
    title6 = 'Lip Makeup';
    list6 = `<li>
                Choosing the right lip products (lipsticks, lip liners, lip glosses)
              </li>
              <li>Techniques for creating full, defined lips</li>
              <li>Lipstick application tips for precision and longevity</li>
              <li>Creating ombre and gradient lip looks</li>`;
    title7 = 'Hands-On Practice';
    list7 = `<li>Provided with makeup stations and guided through hands-on practice applying the techniques learned throughout the workshop.</li>
              <li>Individualized feedback and guidance from instructors to improve technique and skill.</li>
              `;
    div1 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title7}</h4>
            <ul class="curriculum__list">
              ${list7}
            </ul>`;
    title8 = 'Business and Professionalism';
    list8 = `<li>Building a professional portfolio</li>
              <li>Marketing yourself as a makeup artist</li>
              <li>Client consultation skills</li>
              <li>Pricing and business management advice</li>
              `;
    div2 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title8}</h4>
            <ul class="curriculum__list">
              ${list8}
            </ul>`;
    title9 = 'Conclusion and Certificate Distribution';
    list9 = `<li>Certificate of completion distribution</li>
              <li>Networking opportunities with instructors and fellow participants</li>
              `;
    div3 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title9}</h4>
            <ul class="curriculum__list">
              ${list9}
            </ul>`;
    classLink += '1day';
  } else if (pathname.includes('self')) {
    title = 'Self-Makeup Beginner Class';
    img = './images/classes/49a9e39b455bdb866e1b7d02d3fd5d4e.png';
    icon = 'CAD 80';
    icon1 = '3 hrs';
    icon2 = 'Beginner and Enthusiastic';
    icon3 = 'Tools included';
    overview =
      'Designed for individuals to learn how to apply makeup on themselves effectively. The class will provide fundamental knowledge and hands-on practice to achieve everyday makeup looks with confidence';
    title1 = 'Introduction to Makeup Artistry';
    list1 = `<li> Overview of basic makeup terminology and concepts</li>
    <li> Understanding different makeup products and their purposes </li>`;
    title2 = 'Essential Tools and Products';
    list2 = `<li>Makeup brushes and their uses</li>
              <li>Understanding different makeup products (foundations, concealers, powders, etc.)</li>
              <li>
                Importance of hygiene and sanitization in makeup application
              </li>
              <li>Building a professional makeup kit on a budget
</li>`;
    title3 = 'Preparing the Canvas';
    list3 = `<li>Skincare routine before makeup application (cleansing, moisturizing, sunscreen)</li>
              <li>
                Primer application for smoother makeup application
              </li>
              `;
    title4 = 'Foundation and Base Makeup Techniques';
    list4 = `<li>Choosing the right foundation shade and formulation</li>
              <li>Techniques for flawless foundation application (brush, sponge, fingers)</li>
              <li>
                Concealing imperfections and correcting skin tone
              </li>
              <li>Setting foundation with powders for longevity</li>`;
    title5 = 'Enhancing the Eyes';
    list5 = `<li>Basic eyeshadow application techniques for everyday looks</li>
              <li>Eyeliner application for defining the eyes</li>
              <li>Mascara application for lengthening and volumizing lashes</li>
            `;
    title6 = 'Adding Color and Definition';
    list6 = `<li>
                Blush application for a natural flush
              </li>
              <li>Contouring and highlighting techniques to add dimension to the face</li>
              <li>Brow grooming and filling techniques for well-defined brows</li>
             `;
    title7 = 'Perfecting the Lips';
    list7 = `<li>Lip product selection and application (lipstick, lip gloss, lip liner)</li>
              <li>Techniques for creating a defined lip shape and enhancing lip volume</li>
              `;
    div1 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title7}</h4>
            <ul class="curriculum__list">
              ${list7}
            </ul>`;
    title8 = 'Hands-On Practice';
    list8 = `<li>Participants will be provided with makeup stations and guided through hands-on practice applying the techniques learned throughout the class.</li>
              <li>Individualized feedback and guidance from instructors to improve technique and skill.</li>
              `;
    div2 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title8}</h4>
            <ul class="curriculum__list">
              ${list8}
            </ul>`;
    title9 = 'Tips for Everyday Makeup';
    list9 = `<li>Time-saving tips for quick and easy makeup application</li>
              <li>Makeup dos and don'ts for everyday wear</li>
              <li>Advice for maintaining makeup throughout the day</li>
              `;
    div3 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title9}</h4>
            <ul class="curriculum__list">
              ${list9}
            </ul>`;
    title10 = 'Conclusion and Q&A';
    list10 = `<li>Opportunity for participants to ask questions and seek clarification</li>
              <li>Distribution of class handouts or resources for further practice at home</li>
              
              `;
    div4 = `<div class="curriculum__section">
            <h4 class="curriculum__subtitle">${title10}</h4>
            <ul class="curriculum__list">
              ${list10}
            </ul>`;
    classLink += 'self';
  }


  const dataList = `<li class="info-item">
    <div class="icon icon--2xs">
      <img src="./images/classes/Vector.png" alt="Price icon" />
    </div>
    <p class="info-text">${icon}</p>
  </li>
  <li class="info-item">
    <div class="icon icon--2xs">
      <img src="./images/classes/Vector (1).png" alt="Mentorship icon" />
    </div>
    <p class="info-text">${icon1}</p>
  </li>
  <li class="info-item">
    <div class="icon icon--2xs">
      <img
        src="./images/classes/Vector (2).png"
        alt="Future Professionals icon"
      />
    </div>
    <p class="info-text">${icon2}</p>
  </li>
  <li class="info-item">
    <div class="icon icon--2xs">
      <img src="./images/classes/Vector (3).png" alt="Mentorship icon" />
    </div>
    <p class="info-text">${icon3}</p>
  </li>`;

  main.innerHTML = `
    <a class="back-to-classes" href="./classes.html">All classes</a>
    <section class="title">
      <h1 class="title__1">${title}</h1>
      <ul class="desktop-hidden">
        ${dataList}
        <a href="${classLink}" class="btn">Join Class</a>
      </ul>
    </section>

    <section class="content">
      <div class="content-wrapper flex">
        <div class="card">
          <div class="card__image">
            <img
              src="${img}"
              alt="Master Class"
            />
          </div>
          <div class="card__info">
            <h3 class="card__title">${title}</h3>
            <ul class="mobile-hidden">
              ${dataList}
              <a href="${classLink}" class="btn">Join Class</a>
            </ul>
          </div>
      </div>
        <div class="text-content">
          <div class="overview">
            <h3 class="overview__title">Overview</h3>
            <p class="overview__text">
              ${overview}
            </p>
          </div>

          <div class="curriculum">
            <h2 class="curriculum__title">Curriculum</h2>
            <div class="curriculum__section">
              <h4 class="curriculum__subtitle">${title1}</h4>
              <ul class="curriculum__list">
                ${list1}
              </ul>
            </div>
            <div class="curriculum__section">
              <h4 class="curriculum__subtitle"> ${title2}</h4>
              <ul class="curriculum__list">
                ${list2}
              </ul>
            </div>
            <div class="curriculum__section">
              <h4 class="curriculum__subtitle">${title3}</h4>
              <ul class="curriculum__list">
                ${list3}
              </ul>
            </div>
            <div class="curriculum__section">
              <h4 class="curriculum__subtitle">
                ${title4}
              </h4>
              <ul class="curriculum__list">
                ${list4}
              </ul>
            </div>
            <div class="curriculum__section">
              <h4 class="curriculum__subtitle">${title5}</h4>
              <ul class="curriculum__list">
                ${list5}
              </ul>
            </div>
            <div class="curriculum__section">
              <h4 class="curriculum__subtitle">${title6}</h4>
              <ul class="curriculum__list">
                ${list6}
              </ul>
              ${div1}
              ${div2}
              ${div3}
              ${div4}
            </div>
          </div>
        </div>
      </div>
    </section>`;
});
