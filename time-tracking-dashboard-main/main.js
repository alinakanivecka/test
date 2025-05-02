let monthlyButton = document.getElementById('monthly-button');
let dailyButton = document.getElementById('daily-button');
let weeklyButton = document.getElementById('weekly-button');

async function SetMode(periodField, previousPeriodText, button) {
  let result = await fetch('data.json')
  let data = await result.json();
  data.forEach(element => {
    let cardClass = 'card-' + element.title.toLowerCase().replace(' ', '-');
    let activitiesTime = document.querySelector(`.${cardClass} .activities-time`);
    let activitiesPeriod = document.querySelector(`.${cardClass} .activities-period`);
    activitiesTime.textContent = element.timeframes[periodField].current + 'hrs';
    activitiesPeriod.textContent = previousPeriodText + ' - ' + element.timeframes[periodField].previous + 'hrs';
  }); 

  let periodButtons = document.querySelectorAll('.period li');
  periodButtons.forEach(element => {
    element.classList.remove('active-button');
  })
  button.classList.add('active-button');
}

monthlyButton.addEventListener('click', async () => {
  await SetMode('monthly', 'Last month', monthlyButton);
})

dailyButton.addEventListener('click', async () => {
  await SetMode('daily', 'Previous day', dailyButton);
})

weeklyButton.addEventListener('click', async () => {
  await SetMode('weekly', 'Last week', weeklyButton);
})

SetMode('daily', 'Previous day', dailyButton);

