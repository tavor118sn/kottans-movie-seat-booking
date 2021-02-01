const HALL_DIV = document.getElementById('hallSchema');


const HALL_ROWS = 5;
const HALL_PLACES = 6;


const createHallRow = (row) => {
  const rowContent = `
    <div class="hall-row-details hall-element">
        Row ${row}
    </div>  
  `;
  let rowElements = [];
  rowElements.push(rowContent);

  for (let place = 1; place <= HALL_PLACES; place++) {
    rowElements.push(createHallPlace(row, place));
  }
  rowElements.push(rowContent);

  return rowElements.join("\n");

};


const createHallPlace = (row, place) => {
  const placeId = `row-${row}-place-${place}`;
  const inboxValue = `place-${row}-${place}`;
  const title = `Row: ${row}. Place:  ${place}. Price: $5`;
  const disabled = (row === 1) ? "disabled" : "";

  return `
    <input 
        class="checkbox-input visually-hidden" 
        type="checkbox" 
        id="${placeId}" 
        value="${inboxValue}"
        ${disabled}>
    <label 
        for="${placeId}"
        class="hall-place-details hall-element" 
        title="${title}">
        ${place}
    </label>
    `;
};


const generateHallSchema = () => {
  HALL_DIV.innerHTML = '';

  let hallRows = [];
  for (let row = 1; row <= HALL_ROWS; row++) {
    hallRows.push(createHallRow(row));
  }

  HALL_DIV.innerHTML = hallRows.join("\n");
};


generateHallSchema();
