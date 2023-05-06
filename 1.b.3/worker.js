importScripts('https://cdn.bootcdn.net/ajax/libs/exceljs/4.3.0/exceljs.min.js');

self.onmessage = (e) => {
  /** @type {import('exceljs').Workbook} */
  const workbook = new ExcelJS.Workbook();

  const worksheet = workbook.addWorksheet('123');
  worksheet.addRows(new Array(50000).fill().map(() => new Array(20).fill(1)));

  workbook.xlsx.writeBuffer().then((unit8) => {
    const url = URL.createObjectURL(new Blob([unit8.buffer]));
    self.postMessage(url);
  });
};
