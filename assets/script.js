const date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentMonth = monthNames[date.getMonth()];

const currentDate = date.getDate().toString();
let salah_times_wrapper = document.getElementById("salah_times_wrapper");

fetch("assets/salahData.json")
  .then((response) => response.json())
  .then((data) => {
    const monthData = data[currentMonth];
    const todayData = monthData ? monthData[currentDate] : null;

    const ul = document.createElement("ul");
    ul.classList.add("salahtime-warpper-ul");

    for (const [prayer, time] of Object.entries(todayData)) {
      console.log(prayer ,time)
      const li = document.createElement("li");
      li.textContent = `${prayer} : ${time}`;
      ul.appendChild(li);
    }
    salah_times_wrapper.appendChild(ul);
  });
