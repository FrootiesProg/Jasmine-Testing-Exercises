describe("sumPaymentTotal", function () {
  it("should calculate the total correctly for tipAmt", function () {
    allPayments = {
      payment1: { billAmt: "20", tipAmt: "4", tipPercent: 20 },
      payment2: { billAmt: "30", tipAmt: "6", tipPercent: 20 },
      payment3: { billAmt: "40", tipAmt: "8", tipPercent: 20 },
    };

    const total = sumPaymentTotal("tipAmt");
    expect(total).toEqual(18); // Sum of tipAmt: 4 + 6 + 8
  });

  it("should calculate the total correctly for billAmt", function () {
    allPayments = {
      payment1: { billAmt: "20", tipAmt: "4", tipPercent: 20 },
      payment2: { billAmt: "30", tipAmt: "6", tipPercent: 20 },
      payment3: { billAmt: "40", tipAmt: "8", tipPercent: 20 },
    };

    const total = sumPaymentTotal("billAmt");
    expect(total).toEqual(90); // Sum of billAmt: 20 + 30 + 40
  });

  // Add more tests to cover other scenarios and edge cases
});

describe("calculateTipPercent", function () {
  it("should calculate the tip percentage correctly", function () {
    const billAmt = "20";
    const tipAmt = "4";

    const tipPercent = calculateTipPercent(billAmt, tipAmt);
    expect(tipPercent).toEqual(20); // 20% tip percentage (4 is 20% of 20)
  });

  it("should return 0 if billAmt is 0", function () {
    const billAmt = "0";
    const tipAmt = "4";

    const tipPercent = calculateTipPercent(billAmt, tipAmt);
    expect(tipPercent).toEqual(0); // Tip percentage is 0 if billAmt is 0
  });

  // Add more tests to cover other scenarios and edge cases
});
describe("appendDeleteBtn", function () {
  it('should append a "X" delete button to the table row', function () {
    // Create a new table row element
    let tr = document.createElement("tr");
    appendDeleteBtn(tr);

    // Check if the delete button td was appended
    expect(tr.childElementCount).toEqual(1);
    expect(tr.firstChild.innerText).toEqual("X");
  });

  // Add more tests to cover other scenarios and edge cases
});
