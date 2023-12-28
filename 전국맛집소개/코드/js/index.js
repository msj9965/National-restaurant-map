$(document).ready(function () {
  const cities = [
    "seoul",
    "gyeonggi",
    "daegu",
    "ulsan",
    "gyeongnam",
    "chungnam",
    "chungbuk",
    "gwangju",
    "incheon",
    "gangwon",
    "busan",
    "gyeongbook",
    "daejeon",
    "sejong",
    "jeonnam",
    "jeonbuk",
    "jeju",
  ];

  cities.forEach((city) => {
    if (city !== "ulsan" && city !== "sejong") {
      $(`.${city}`).hover(
        () => {
          $(`.${city}`).attr("src", "../images/pin-active.svg");
        },
        () => {
          $(`.${city}`).attr("src", "../images/pin-unactive.svg");
        }
      );
    }

    $(`.${city}`).click(function () {
      if (city == "ulsan" || city == "sejong") {
        alert("현재 준비중입니다.")
      } else {
        location.href = `${city}.html`;
      }
    });
  });
});