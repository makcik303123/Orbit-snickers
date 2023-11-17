const content = document.querySelector(".content__wrapper");

console.log(content);

const createElem = (title, name, code) => {
	return `<div class="content__row">
    <div class="row__surname">${name}</div>
    <div class="row__gameCode">${code}</div>

    <div class="row__prizes">
       ${title}
    </div>
    <div class="row__date">17.11.2023</div>
    </div>`;
};
const data = [
	{
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 350666809760378, <br />Страна происхождения: КИТАЙ и дополнительные денежные средства",
		name: "Щетко А.Н.",
		gameCode: "0008412",
	},
	{
		title:
			"Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SD6QG4139Y0, <br />Страна происхождения: ВЬЕТНАМ и дополнительные денежные средства",
		name: "Терещенко Н.Ф.",
		gameCode: "0000622",
	},
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNP13 Mid Alu Mid Sp GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INP13, Серийный номер:SD573Q7DRWR, <br />Страна происхождения: КИТАЙ и дополнительные денежные средства",
		name: "Ковалева О.А.",
		gameCode: "0007722",
	},
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNUL3 Mid Alu Mid Sp M/L GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INUL3; РБ, Серийный номер:SMCX16MC4NJ, <br />Страна происхождения: ВЬЕТНАМ и дополнительные денежные средства",
		name: "Ганьков А.А.",
		gameCode: "0000949",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SCY41H0C3HK, <br />Страна происхождения: КИТАЙ и дополнительные денежные средства",
		name: "Хлимонков С.П.",
		gameCode: "0005335",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SD244R04KY0, <br />Страна происхождения: КИТАЙ и дополнительные денежные средства",
		name: "Нестеров С.П.",
		gameCode: "0002741",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SDCW49M3PP2, <br />Страна происхождения: КИТАЙ и дополнительные денежные средства",
		name: "Дубовец Е.С.",
		gameCode: "0000953",
	},
];

data.forEach((el) => {
	content.innerHTML += createElem(el.title, el.name, el.gameCode);
});
