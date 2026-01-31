import { test } from '@playwright/test';

const testData = [
  { id: 'Pos_Fun_001', input: 'mama campus yanavaa' },
  { id: 'Neg_Fun_002', input: 'mama campus giyaa but lectures miss unaa' },
  { id: 'Pos_Fun_003', input: 'mata sahaBhaagi venna baeri una asaniipa una nisaa' },
  { id: 'Pos_Fun_004', input: 'Meeka Hariyata open unaadha?  ' },
  { id: 'Neg_Fun_005', input: 'meeka balanna' },
  { id: 'Pos_Fun_006', input: 'oyaa eeka hodhata karalaa thiyenavaa' },
  { id: 'Neg_Fun_007', input: 'mama heta giyaa' },
  { id: 'Pos_Fun_008', input: 'suBha anaagathayak!' },
  { id: 'Pos_Fun_009', input: 'apita meeka kiyala dhenna puluvandha?' },
  { id: 'Neg_Fun_0010', input: 'hari hari hari lassanayi' },
  { id: 'Neg_Fun_0011', input: 'karuNaakaralaa eka hariyata karanna' },
  { id: 'Neg_Fun_0012', input: 'adoo machan eka hariyata karapan' },
  { id: 'Pos_Fun_0013', input: 'mata badagini' },
  { id: 'Pos_Fun_0014', input: 'ehaata yanna' },
  { id: 'Pos_Fun_0015', input: 'api sellam karanavaa' },
  { id: 'Neg_Fun_0016', input: 'adhamamaenavaa' },
  { id: 'Pos_Fun_0017', input: 'poddak poddak' },
  { id: 'Pos_Fun_0018', input: 'mama iiye boodimata aavaa' },
  { id: 'Pos_Fun_0019', input: 'mama dhaen campus ekee innavaa' },
  { id: 'Neg_Fun_0020', input: 'mama    gedhara    yanavaa' },
  { id: 'Pos_Fun_0021', input: 'mata epaa' },
  { id: 'Pos_Fun_0022', input: 'mama vaeda karanna hadhanne?' },
  { id: 'Pos_Fun_0023', input: 'oyaalaa kaevadha?' },
  { id: 'Pos_Fun_0024', input: 'karunaakarala eeka kiyanna' },
  { id: 'Pos_Fun_0025', input: 'oyaage git hub profile eka mata balanna puluvandha?' },
  { id: 'Pos_Fun_0026', input: 'Document eka thiyena link eka open karanna puluvandha?' },
  { id: 'Pos_Fun_0027', input: 'mee paara GPA eka kohoma veyidha danne naee needha?' },
  { id: 'Neg_Fun_0028', input: 'ee aedhuma rs. 1750k vitharayi' },
  { id: 'Pos_Fun_0029', input: 'api gedhara yadhdhi 5.30 pm vithara unaa' },
  { id: 'Pos_Fun_0030', input: 'medhaapaara magee birthday eka ganne april 21' },
  { id: 'Pos_Fun_0031', input: 'map ekee eheeta dhura pennuve 5km yi' },
  { id: 'Pos_Fun_0032', input: 'mata heta eyath ekka kathaa karanna oona' },
  { 
  id: 'Neg_Fun_0033', 
  input: `mama havasata
gedhara gihin
kiyannam` 
  },

  { id: 'Pos_Fun_0034', input: 'ICT subject eka nam really interesting. Computers, internet, software vageema technology valata basic knowledge ekak laebenavaa. Sometimes practical parts tikak hard, but godak useful future ekata. ICT nisaa problem-solving skills saha logical thinking ekath improve venavaa' },
  { id: 'Pos_Fun_0035', input: 'Type “mama gedhara awa” in the input field and then clear the input field' }

 
];

testData.forEach(({ id, input}) => {
  test(id, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea').nth(0);
    const outputBox = page.locator('textarea').nth(1);

    await inputBox.fill(input);
    await page.waitForTimeout(1000);
    
  });
});


