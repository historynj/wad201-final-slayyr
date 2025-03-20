let savedForm = {};
let phoneCountryCodeData = [];

const premiumServices = {
  "premium-service-cleansing": "Deep skin cleansing",
  "premium-service-bleach": "Bleach body hair",
  "premium-service-hydromassage": "Hydromassage",
  "premium-service-moisture": "Hair Moisture",
  "premium-service-waxing": "Waxing",
  "premium-service-spa": "Foot and hand SPA",
  "premium-service-relaxing": "Relaxing massage",
  "premium-service-gommage": "Gommage (body exfoliation and hydration)",
};

const formServiceStart = `
<div class="contact__form__tab">
    <input id="contact-service" type="radio" name="contact-type" value="contact-service" checked hidden onchange="changeType(this)" />
    <label for="contact-service">Services</label>
    <input id="contact-classes" type="radio" name="contact-type" value="contact-classes" hidden onchange="changeType(this)" />
    <label for="contact-classes">Classes</label>
</div>
<div class="contact__form__inputs">
    <div>
        <label>Event Type</label>
        <div class="input--select flex">
            <input id="event-type-wedding" type="radio" name="event-type" value="event-type-wedding" checked hidden onchange="changeSubmitBtn()" />
            <label for="event-type-wedding">Wedding</label>
            <input id="event-type-party" type="radio" name="event-type" value="event-type-party" hidden onchange="changeSubmitBtn()" />
            <label for="event-type-party">Party</label>
            <input id="event-type-photoshoot" type="radio" name="event-type" value="event-type-photoshoot" hidden onchange="changeSubmitBtn()" />
            <label for="event-type-photoshoot">Photoshoot</label>
        </div>
    </div>
    <div class="contact__form__inputs__book flex">
        <div>
            <label>Event Date</label>
            <input type="date"  name="event-date" />
            <div class="contact__form__inputs__checkbox">
                <input id="event-date-not-decided" type="checkbox" name="event-date-not-decided" />
                <label for="event-date-not-decided">Not decided</label>
            </div>
        </div>
        <div>
            <label>Event Time</label>
            <select name="event-time">
                <option value="full-day" selected>Full day</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>
            <div class="contact__form__inputs__checkbox">
                <input id="event-time-not-decided" type="checkbox" name="event-time-not-decided" />
                <label for="event-time-not-decided">Not decided</label>
            </div>
        </div>
    </div>
    <div>
        <label>Name</label>
        <input type="text" placeholder="Your name" name="name" />
    </div>
    <div>
        <label>Contact</label>
        <div class="contact__form__inputs__method">
            <div>
                <input id="contact-method-call" type="radio" name="contact-method" value="contact-method-call" checked />
                <label for="contact-method-call">Call</label>
            </div>
            <div class="input--phone">
                <select id="phone-country-code" name="country">
                </select>
                <input type="tel" placeholder="Your mobile number" />
            </div>
            <div>
                <input id="contact-method-whatsapp" type="radio" name="contact-method" value="contact-method-whatsapp" />
                <label for="contact-method-whatsapp">Whatsapp</label>
            </div>
            <div>
                <input id="contact-method-sms" type="radio" name="contact-method" value="contact-method-sms" />
                <label for="contact-method-sms">SMS</label>
            </div>
            <div>
                <input id="contact-method-sms" type="radio" name="contact-method" value="contact-method-sms" />
                <label for="contact-method-sms">Email</label>
            </div>
        </div>
    </div>
    <div>
        <label>When do you want us to call?</label>
        <div class="contact__form__inputs__when">
            <div>
                <input id="contact-when-notmind" type="radio" name="contact-when" value="contact-when-notmind" checked />
                <label for="contact-when-notmind">I don't mind</label>
            </div>
            <div>
                <input id="contact-when-morning" type="radio" name="contact-when" value="contact-when-morning" />
                <label for="contact-when-morning">Morning</label>
            </div>
            <div>
                <input id="contact-when-afternoon" type="radio" name="contact-when" value="contact-when-afternoon" />
                <label for="contact-when-afternoon">Afternoon</label>
            </div>
            <div>
                <input id="contact-when-evening" type="radio" name="contact-when" value="contact-when-evening" />
                <label for="contact-when-evening">Evening</label>
            </div>
        </div>
    </div>
</div>
<button id="next-btn" type="button" class="btn" onclick="renderServiceNextForm()">Next</button>`;

const formClassStart = `<div class="contact__form__tab">
    <input id="contact-service" type="radio" name="contact-type" value="contact-service" hidden onchange="changeType(this)" />
    <label for="contact-service">Services</label>
    <input id="contact-classes" type="radio" name="contact-type" value="contact-classes" checked hidden onchange="changeType(this)" />
    <label for="contact-classes">Classes</label>
</div>
<div class="contact__form__inputs">
    <div>
        <label>Class</label>
        <div class="input--select flex">
            <input id="class-type-1on1" type="radio" name="class-type" value="class-type-1on1" checked hidden />
            <label for="class-type-1on1">1-on-1 Master Subscription</label>
            <input id="class-type-1day" type="radio" name="class-type" valsue="class-type-1day" hidden />
            <label for="class-type-1day">1-day Makeup workshop</label>
            <input id="class-type-beginner" type="radio" name="class-type" value="class-type-beginner" hidden />
            <label for="class-type-beginner">Self-Makeup beginner class</label>
        </div>
    </div>
    <div class="contact__form__inputs__book">
        <div>
            <label>Class Date</label>
            <input type="date" name="event-date" />
            <div class="contact__form__inputs__checkbox">
                <input id="event-date-doesnt-matter" type="checkbox" name="event-date-doesnt-matter" />
                <label for="event-date-doesnt-matter">Doesn't matter</label>
            </div>
        </div>
    </div>
    <div>
        <label>Any questions?</label>
        <textarea type="text" placeholder="Your message" rows="5" name="question"></textarea>
    </div>
    <div>
        <label>Name</label>
        <input type="text" placeholder="Your name" name="name" />
    </div>
    <div>
        <label>Contact</label>
        <div class="contact__form__inputs__method">
            <div>
                <input id="contact-method-call" type="radio" name="contact-method" value="contact-method-call" checked />
                <label for="contact-method-call">Call</label>
            </div>
            <div class="input--phone">
                <select id="phone-country-code" name="country">
                </select>
                <input type="tel" placeholder="Your mobile number" name="phone" />
            </div>
            <div>
                <input id="contact-method-whatsapp" type="radio" name="contact-method" value="contact-method-whatsapp" />
                <label for="contact-method-whatsapp">Whatsapp</label>
            </div>
            <div>
                <input id="contact-method-sms" type="radio" name="contact-method" value="contact-method-sms" />
                <label for="contact-method-sms">SMS</label>
            </div>
            <div>
                <input id="contact-method-sms" type="radio" name="contact-method" value="contact-method-sms" />
                <label for="contact-method-sms">Email</label>
            </div>
        </div>
    </div>
</div>
<button type="subtmit" class="btn">Submit</button>`;

document.addEventListener("DOMContentLoaded", () => {
  const form = renderServiceStartForm();
  form.addEventListener("submit", submitContact);
});

function renderServiceStartForm() {
  savedForm = {};

  const form = document.getElementById("contact-form");
  form.innerHTML = formServiceStart;

  const header = document.getElementById("contact-header");
  header?.classList.remove("hidden");

  renderPhoneCountryCode();

  return form;
}

function changeType(target) {
  savedForm = {};

  const form = document.getElementById("contact-form");
  if (target.value === "contact-service") {
    form.innerHTML = formServiceStart;
  } else {
    form.innerHTML = formClassStart;
  }

  renderPhoneCountryCode();
}

async function renderPhoneCountryCode() {
  if (!phoneCountryCodeData.length) {
    const res = await fetch("../data/country-code.json");
    phoneCountryCodeData = await res.json();
  }

  const phoneCountrySelect = document.getElementById("phone-country-code");

  console.log(phoneCountrySelect, phoneCountryCodeData);

  phoneCountryCodeData
    .toSorted((a, b) => a.dial_code - b.dial_code)
    .forEach(({ dial_code }) => {
      const option = document.createElement("option");
      option.value = dial_code;
      option.innerText = dial_code;
      phoneCountrySelect.appendChild(option);
    });

  const header = document.getElementById("contact-header");
  header?.classList.remove("hidden");
}

function renderServiceNextForm() {
  const form = document.getElementById("contact-form");

  const formData = new FormData(form);
  for (const [key, val] of formData.entries()) {
    savedForm[key] = val;
  }

  const eventType = formData.get("event-type");

  const weddingOthers = `<li class="flex">
        <div class="contact__form__inputs__others__who">
            <div class="contact__form__inputs__others__who__label">
                <span>Groom</span>
            </div>  
            <div class="input--quantity">
                <button id="groom-number-minus" type="button" disabled onclick="changeQuantity('groom-number', -1)">-</button>
                <span id="groom-number-display">0</span>
                <input id="groom-number" type="number" name="groom-number" value="0" min="0" hidden />
                <button type="button" onclick="changeQuantity('groom-number', 1)">+</button>
            </div>
        </div>
        <div class="contact__form__inputs__checkbox-row">
            <div>
                <input id="others-groom-makeup" type="checkbox" name="others-groom-checkbox"
                value="others-groom-makeup" class="checkbox--bg" checked />
                <label for="others-groom-makeup">Makeup</label>
            </div>
        </div>
    </li>
    <li class="flex">
        <div class="contact__form__inputs__others__who">
            <div class="contact__form__inputs__others__who__label">
                <span>Bridesmaid</span>
            </div>
            <div class="input--quantity">
                <button id="bridesmaid-number-minus" type="button" disabled onclick="changeQuantity('bridesmaid-number', -1)">-</button>
                <span id="bridesmaid-number-display">0</span>
                <input id="bridesmaid-number" type="number" name="bridesmaid-number" value="0" min="0" hidden />
                <button type="button" onclick="changeQuantity('bridesmaid-number', 1)">+</button>
            </div>
        </div>
        <div class="contact__form__inputs__checkbox-row">
            <div>
                <input id="others-bridesmaid-hairstyle" type="checkbox" name="others-bridesmaid-checkbox"
                value="others-bridesmaid-hairstyle" class="checkbox--bg" checked />
                <label for="others-bridesmaid-hairstyle">Hairstyle</label>
            </div>
            <div>
                <input id="others-bridesmaid-makeup" type="checkbox" name="others-bridesmaid-checkbox"
                value="others-bridesmaid-makeup" class="checkbox--bg" checked />
                <label for="others-bridesmaid-makeup">Makeup</label>
            </div>
        </div>
    </li>
    <li class="flex">
        <div class="contact__form__inputs__others__who">
            <div class="contact__form__inputs__others__who__label">
                <span>Flower girl</span>
            </div>
            <div class="input--quantity">
                <button id="flowergirl-number-minus" type="button" disabled onclick="changeQuantity('flowergirl-number', -1)">-</button>
                <span id="flowergirl-number-display">0</span>
                <input id="flowergirl-number" type="number" name="flowergirl-number" value="0" min="0" hidden />
                <button type="button" onclick="changeQuantity('flowergirl-number', 1)">+</button>
            </div>
        </div>
        <div class="contact__form__inputs__checkbox-row">
            <div>
                <input id="others-flowergirl-hairstyle" type="checkbox" name="others-flowergirl-checkbox"
                value="others-flowergirl-hairstyle" class="checkbox--bg" checked />
                <label for="others-flowergirl-hairstyle">Hairstyle</label>
            </div>
            <div>
                <input id="others-flowergirl-makeup" type="checkbox" name="others-flowergirl-checkbox"
                value="others-flowergirl-makeup" class="checkbox--bg" checked />
                <label for="others-flowergirl-makeup">Makeup</label>
            </div>
        </div>
    </li>
    `;

  const partyOthers = `
    <li class="flex">
        <div class="contact__form__inputs__others__who">
            <span>Woman</span>
            <div class="input--quantity">
                <button id="woman-number-minus" type="button" disabled onclick="changeQuantity('woman-number', -1)">-</button>
                <span id="woman-number-display">0</span>
                <input id="woman-number" type="number" name="woman-number" value="0" min="0" hidden />
                <button type="button" onclick="changeQuantity('woman-number', 1)">+</button>
            </div>
        </div>
        <div class="contact__form__inputs__checkbox-row">
            <div>
                <input id="others-woman-hairstyle" type="checkbox" name="others-woman-checkbox"
                value="others-woman-hairstyle" class="checkbox--bg" checked />
                <label for="others-woman-hairstyle">Hairstyle</label>
            </div>
            <div>
                <input id="others-woman-makeup" type="checkbox" name="others-woman-checkbox"
                value="others-woman-makeup" class="checkbox--bg" checked />
                <label for="others-woman-makeup">Makeup</label>
            </div>
        </div>
    </li>
    <li class="flex">
        <div class="contact__form__inputs__others__who">
            <span>Man</span>
            <div class="input--quantity">
                <button id="man-number-minus" type="button" disabled onclick="changeQuantity('man-number', -1)">-</button>
                <span id="man-number-display">0</span>
                <input id="man-number" type="number" name="man-number" value="0" min="0" hidden />
                <button type="button" onclick="changeQuantity('man-number', 1)">+</button>
            </div>
        </div>
        <div class="contact__form__inputs__checkbox-row">
            <div>
                <input id="others-man-makeup" type="checkbox" name="others-man-checkbox"
                value="others-man-makeup" class="checkbox--bg" checked />
                <label for="others-man-makeup">Makeup</label>
            </div>
        </div>
    </li>
    `;

  form.innerHTML = `
    <div class="contact__form__tab">
                    <input id="contact-service" type="radio" name="contact-type" value="contact-service" checked hidden
                        onchange="changeType(this)" />
                    <label for="contact-service">Services</label>
                    <input id="contact-classes" type="radio" name="contact-type" value="contact-classes" hidden
                        onchange="changeType(this)" />
                    <label for="contact-classes">Classes</label>
                </div>
                <div class="contact__form__back">
                    <button onclick="renderServiceStartForm()">Back</button>
                </div>
                <div class="contact__form__inputs">
                    <div>
                        <label>${
                          eventType === "event-type-wedding"
                            ? "Bridal Service"
                            : "Service"
                        }</label>
                        <div class="input--select flex">
                            <input id="service-type-makeup" type="checkbox" name="service-type-checkbox" value="service-type-makeup"
                                checked hidden />
                            <label for="service-type-makeup">Makeup</label>
                            <input id="service-type-hairstyle" type="checkbox" name="service-type-checkbox"
                                value="service-type-hairstyle" hidden />
                            <label for="service-type-hairstyle">Hairstyle</label>
                        </div>
                    </div>
                    <div>
                        <label>Event Location</label>
                        <div class="input--search">
                            <input type="text" name="event-location" placeholder="Search address" />
                        </div>
                        <div class="contact__form__inputs__checkbox">
                            <input id="event-location-not-decided" type="checkbox" name="event-location-not-decided" />
                            <label for="event-location-not-decided">Not decided</label>
                        </div>
                    </div>
                    <div>
                        <label>Premium service</label>
                        <div class="contact__form__inputs__checkbox-list">
                            <div>
                                <input id="premium-service-cleansing" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-cleansing" />
                                <label for="premium-service-cleansing">Deep skin cleansing</label>
                            </div>
                            <div>
                                <input id="premium-service-bleach" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-bleach" />
                                <label for="premium-service-bleach">Bleach body hair</label>
                            </div>
                            <div>
                                <input id="premium-service-hydromassage" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-hydromassage" />
                                <label for="premium-service-hydromassage">Hydromassage</label>
                            </div>
                            <div>
                                <input id="premium-service-moisture" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-moisture" />
                                <label for="premium-service-moisture">Hair Moisture</label>
                            </div>
                            <div>
                                <input id="premium-service-waxing" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-waxing" />
                                <label for="premium-service-waxing">Waxing</label>
                            </div>
                            <div>
                                <input id="premium-service-spa" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-spa" />
                                <label for="premium-service-spa">Foot and hand SPA</label>
                            </div>
                            <div>
                                <input id="premium-service-relaxing" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-relaxing" />
                                <label for="premium-service-relaxing">Relaxing massage</label>
                            </div>
                            <div>
                                <input id="premium-service-gommage" type="checkbox" name="premium-service-checkbox"
                                    value="premium-service-gommage" />
                                <label for="premium-service-gommage">Gommage (body exfoliation and hydration)</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Anyone else need service?</label>
                        <ul class="contact__form__inputs__others">
                            ${
                              eventType === "event-type-wedding"
                                ? weddingOthers
                                : partyOthers
                            }
                        </ul>
                    </div>
                    <div>
                        <label>Anything you want us to know?</label>
                        <textarea type="text" placeholder="Your message" rows="5"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
    `;

  const header = document.getElementById("contact-header");
  header.classList.add("hidden");
}

function changeSubmitBtn() {
  const form = document.getElementById("contact-form");
  const photoshoot = document.getElementById("event-type-photoshoot");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  if (photoshoot.checked) {
    if (nextBtn) {
      form.removeChild(nextBtn);

      const submitBtn = document.createElement("button");
      submitBtn.classList.add("btn");
      submitBtn.innerText = "Submit";
      submitBtn.type = "submit";
      submitBtn.id = "submit-btn";

      form.appendChild(submitBtn);
    }
  } else {
    if (submitBtn) {
      form.removeChild(submitBtn);

      const nextBtn = document.createElement("button");
      nextBtn.classList.add("btn");
      nextBtn.innerText = "Next";
      nextBtn.type = "button";
      nextBtn.id = "submit-btn";
      nextBtn.addEventListener("click", renderServiceNextForm);

      form.appendChild(nextBtn);
    }
  }
}

function changeQuantity(id, d) {
  const input = document.getElementById(id);
  const display = document.getElementById(id + "-display");
  const minusBtn = document.getElementById(id + "-minus");

  const nextValue = parseInt(input.value) + d;
  const nextStr = nextValue.toString();

  input.value = nextStr;
  display.innerText = nextStr;

  if (nextValue < 1) {
    minusBtn.disabled = true;
  } else {
    minusBtn.disabled = false;
  }
}

function submitContact(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  for (const [key, val] of formData.entries()) {
    if (key.includes("checkbox") && savedForm[key]) {
      savedForm[key] += "," + val;
    } else {
      savedForm[key] = val;
    }
  }

  console.log(savedForm);

  const premium =
    savedForm["premium-service-checkbox"]?.split(",").filter((item) => item) ||
    [];

  const attendessGroom = parseInt(savedForm["groom-number"]);
  const groomService = savedForm["others-groom-checkbox"]
    ?.split(",")
    .filter((item) => item)
    .map((item) => item.split("-")[item.split("-").length - 1]);

  const attendessBridesmaid = parseInt(savedForm["bridesmaid-number"]);
  const bridesmaidService = savedForm["others-bridesmaid-checkbox"]
    ?.split(",")
    .filter((item) => item)
    .map((item) => item.split("-")[item.split("-").length - 1]);

  const attendessFlowergirl = parseInt(savedForm["flowergirl-number"]);
  const flowergirlService = savedForm["others-flowergirl-checkbox"]
    ?.split(",")
    .filter((item) => item)
    .map((item) => item.split("-")[item.split("-").length - 1]);

  const attendessWoman = parseInt(savedForm["woman-number"]);
  const womanService = savedForm["others-woman-checkbox"]
    ?.split(",")
    .filter((item) => item)
    .map((item) => item.split("-")[item.split("-").length - 1]);

  const attendessMan = parseInt(savedForm["man-number"]);
  const manService = savedForm["others-man-checkbox"]
    ?.split(",")
    .filter((item) => item)
    .map((item) => item.split("-")[item.split("-").length - 1]);

  const form = document.getElementById("contact-form");

  if (savedForm["contact-type"] === "contact-service") {
    form.innerHTML = `<div class="contact__form__tab">
        <input id="contact-service" type="radio" name="contact-type" value="contact-service" hidden onchange="changeType(this)" checked />
        <label for="contact-service">Services</label>
        <input id="contact-classes" type="radio" name="contact-type" value="contact-classes" hidden onchange="changeType(this)" />
        <label for="contact-classes">Classes</label>
    </div>
    <div class="contact__complete__message">
        <h3 class="contact__complete__message__title">Thanks Janny,<br />we will contact you soon!</h3>
        <p>We will call +1-123-4567-890 to confirm the appointment details with you.</p>
        <div class="contact__complete__message__edit">Edit Details</div>
    </div>
    <div class="contact__complete__info">
        <div class="contact__complete__info__image image--short">
            <img src="./images/home/form-complete.png" alt="Photo of makeup products" />
        </div>
        <div class="contact__complete__info__summary">
            <p class="contact__complete__info__summary__label">Your estimated price will be:</p>
            <p class="contact__complete__info__summary__amount">CAD <span>1,000 - 1,200</span></p>
        </div>
        <div class="contact__complete__info__detail flex">
            <ul>
                <h5>Basic services</h5>
                <li>- Exclusive room</li>
                <li>- Hairstyle</li>
                <li>- Hairstyle trial</li>
                <li>- Makeup trial</li>
                <li>- Makeup trial</li>
                <li>- Manicure</li>
                <li>- Pedicure</li>
                <li>- Eyebrow design</li>
                <li>- Coffee or tea with cake</li>
                <li>- Bathtub</li>
                <li>- Help with getting dressed</li>
            </ul>
            <div class="contact__complete__info__detail__review">
                <ul id="premium-services-confirm">
                    <h5>Premium services</h5>
                    ${premium
                      .map((item) => `<li>- ${premiumServices[item]}</li>`)
                      .join("")}
                </ul>
                <ul id="additional-attendees-confirm">
                    <h5>Additional attendees</h5>
                    ${
                      attendessGroom
                        ? `<li>- Groom${
                            attendessGroom > 1 ? ` * ${attendessGroom}` : ""
                          } ${
                            groomService.length
                              ? `(${groomService.join(" + ")})</li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      attendessBridesmaid
                        ? `<li>- Bridesmaid${
                            attendessBridesmaid > 1
                              ? ` * ${attendessBridesmaid}`
                              : ""
                          } ${
                            bridesmaidService.length
                              ? `(${bridesmaidService.join(" + ")})</li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      attendessFlowergirl
                        ? `<li>- Flowergirl${
                            attendessFlowergirl > 1
                              ? ` * ${attendessFlowergirl}`
                              : ""
                          } ${
                            flowergirlService.length
                              ? `(${flowergirlService.join(" + ")})</li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      attendessWoman
                        ? `<li>- Woman${
                            attendessWoman > 1 ? ` * ${attendessWoman}` : ""
                          } ${
                            womanService.length
                              ? `(${womanService.join(" + ")})</li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      attendessMan
                        ? `<li>- Man${
                            attendessMan > 1 ? ` * ${attendessMan}` : ""
                          } ${
                            manService.length
                              ? `(${manService.join(" + ")})</li>`
                              : ""
                          }`
                        : ""
                    }
                </ul>
            </div>
        </div>

        <div class="contact__complete__info__footer">
            <div class="contact__complete__info__logo">
                <img src="./images/logo/logo-with-text.png" alt="Carla Beauty logo" />
            </div>
            <ul>
                <li class="hidden">
                    <a href="tel:+00000000000">
                        <div class="icon--xs">
                            <img src="./images/icons/phone-primary.png" />
                        </div>
                        <span class="contact__hidden">+ 1 00000000000</span>
                    </a>
                </li>
                <li>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <div class="icon--xs">
                            <img src="./images/icons/whatsapp-primary.png" />
                        </div>
                        <span class="contact__hidden">+ 1 00000000000</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/carlabeauty" target="_blank">
                        <div class="icon--xs">
                            <img src="./images/icons/instagram-bold.png" />
                        </div>
                        <span class="contact__hidden">carlabeatrizs_</span>
                    </a>
                </li>
            </ul>
            <button class="btn">Share</button>
        </div>
    </div>
    `;
  } else {
    form.innerHTML = `<div class="contact__form__tab">
    <input id="contact-service" type="radio" name="contact-type" value="contact-service" hidden onchange="changeType(this)" />
    <label for="contact-service">Services</label>
    <input id="contact-classes" type="radio" name="contact-type" value="contact-classes" hidden onchange="changeType(this)" checked />
    <label for="contact-classes">Classes</label>
</div>
<div class="contact__complete__message">
    <h3 class="contact__complete__message__title">Thanks Janny,<br />we will contact you soon!</h3>
    <p>We will call +1-0000000000 to get back to your enquiry</p>
</div>
<div class="contact__complete__info contact__complete__info--classes">
    <div class="contact__complete__info__image">
        <img src="./images/home/form-complete.png" alt="Photo of makeup products" />
    </div>
    <div class="contact__complete__info__footer contact__complete__info__footer--classes">
        <p>Talk soon Janny :)</p>
        <ul>
            <li>
                <a href="tel:+00000000000">
                    <div class="icon--xs">
                        <img src="./images/icons/phone-primary.png" />
                    </div>
                    <span>+1 00000000000</span>
                </a>
            </li>
            <li>
                <a href="https://web.whatsapp.com/" target="_blank">
                    <div class="icon--xs">
                        <img src="./images/icons/whatsapp-primary.png" />
                    </div>
                    <span>+1 00000000000</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/carlabeauty" target="_blank">
                    <div class="icon--xs">
                        <img src="./images/icons/instagram-bold.png" />
                    </div>
                    <span>carlabeatrizs_</span>
                </a>
            </li>
        </ul>
    </div>
</div>
`;
  }

  const header = document.getElementById("contact-header");
  header.classList.add("hidden");

  savedForm = {};
}
