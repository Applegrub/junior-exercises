import { toRoman, toArabic } from '../tasks/14/14.js';

describe('task 14 test, toRoman()', () => {
  it('converts 1', () => expect(toRoman(1)).equal('I'));
  it('converts 2', () => expect(toRoman(2)).equal('II'));
  it('converts 4', () => expect(toRoman(4)).equal('IV'));
  it('converts 5', () => expect(toRoman(5)).equal('V'));
  it('converts 6', () => expect(toRoman(6)).equal('VI'));
  it('converts 27', () => expect(toRoman(27)).equal('XXVII'));
  it('converts 48', () => expect(toRoman(48)).equal('XLVIII'));
  it('converts 59', () => expect(toRoman(59)).equal('LIX'));
  it('converts 93', () => expect(toRoman(93)).equal('XCIII'));
  it('converts 141', () => expect(toRoman(141)).equal('CXLI'));
  it('converts 163', () => expect(toRoman(163)).equal('CLXIII'));
  it('converts 402', () => expect(toRoman(402)).equal('CDII'));
  it('converts 575', () => expect(toRoman(575)).equal('DLXXV'));
  it('converts 911', () => expect(toRoman(911)).equal('CMXI'));
  it('converts 1024', () => expect(toRoman(1024)).equal('MXXIV'));
  it('converts 3000', () => expect(toRoman(3000)).equal('MMM'));
});

describe('task 14 test, toArabic()', () => {
  it('converts I', () => expect(toArabic('I')).equal(1));
  it('converts II', () => expect(toArabic('II')).equal(2));
  it('converts IV', () => expect(toArabic('IV')).equal(4));
  it('converts V', () => expect(toArabic('V')).equal(5));
  it('converts VI', () => expect(toArabic('VI')).equal(6));
  it('converts XXVII', () => expect(toArabic('XXVII')).equal(27));
  it('converts XLVIII', () => expect(toArabic('XLVIII')).equal(48));
  it('converts LIX', () => expect(toArabic('LIX')).equal(59));
  it('converts XCIII', () => expect(toArabic('XCIII')).equal(93));
  it('converts CXLI', () => expect(toArabic('CXLI')).equal(141));
  it('converts CLXIII', () => expect(toArabic('CLXIII')).equal(163));
  it('converts CDII', () => expect(toArabic('CDII')).equal(402));
  it('converts DLXXV', () => expect(toArabic('DLXXV')).equal(575));
  it('converts CMXI', () => expect(toArabic('CMXI')).equal(911));
  it('converts MXXIV', () => expect(toArabic('MXXIV')).equal(1024));
  it('converts MMM', () => expect(toArabic('MMM')).equal(3000));

  it('converts IIII', () => expect(toArabic('IIII')).equal(false));
  it('converts VX', () => expect(toArabic('VX')).equal(false));
});
