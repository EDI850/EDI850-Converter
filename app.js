function convertToEDI850() {
    const orderNumber = document.getElementById('orderNumber').value;
    const orderDate = document.getElementById('orderDate').value;
    const buyerName = document.getElementById('buyerName').value;
    const supplierName = document.getElementById('supplierName').value;
    const itemNumber = document.getElementById('itemNumber').value;
    const quantity = document.getElementById('quantity').value;
    const unitPrice = document.getElementById('unitPrice').value;

    let edi850 = `ISA*00*          *00*          *ZZ*SENDERID       *ZZ*RECEIVERID     *${orderDate}*U*00401*000000001*0*P*>~\n`;
    edi850 += `GS*PO*SENDERID*RECEIVERID*${orderDate}*0001*X*004010~\n`;
    edi850 += `ST*850*0001~\n`;
    edi850 += `BEG*00*SA*${orderNumber}**${orderDate}~\n`;
    edi850 += `REF*BT*${buyerName}~\n`;
    edi850 += `REF*SU*${supplierName}~\n`;
    edi850 += `PO1**${quantity}*EA*${unitPrice}**VP*${itemNumber}~\n`;
    edi850 += `SE*0001*0001~\n`;
    edi850 += `GE*1*0001~\n`;
    edi850 += `IEA*1*000000001~\n`;

    document.getElementById('ediOutput').textContent = edi850;
}
