/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */


export class Carousel{



  private _currdeg = 0;
  private _totalItems = 0;
  private _maxWidthSize = 0;
  private _maxHeigthSize = 0;
  private _maxDegree = 0;
  private _totalWidth = 0;
  private _isHorizontal= false;
  private _items = [];
  private _degreesSlides = [];
  private _activeIndex = 0;
  private _lastIndex = -1;
  private _lockSlides = false;



  get currdeg(): number {
    return this._currdeg;
  }

  set currdeg(value: number) {
    this._currdeg = value;
  }

  get totalItems(): number {
    return this._totalItems;
  }

  set totalItems(value: number) {
    this._totalItems = value;
  }


  get isHorizontal(): boolean {
      return this._isHorizontal;
  }

  set isHorizontal(value: boolean) {
      this._isHorizontal = value;
  }

  get maxWidthSize(): number {
    return this._maxWidthSize;
  }

  set maxWidthSize(value: number) {
    this._maxWidthSize = value;
  }

  get maxHeigthSize(): number {
      return this._maxHeigthSize;
  }

  set maxHeigthSize(value: number) {
      this._maxHeigthSize = value;
  }

  get maxDegree(): number {
    return this._maxDegree;
  }

  set maxDegree(value: number) {
    this._maxDegree = value;
  }

  get totalWidth(): number {
    return this._totalWidth;
  }

  set totalWidth(value: number) {
    this._totalWidth = value;
  }

  get items(): any {
    return this._items;
  }

  set items(value: any) {
    this._items = value;
  }

  get degreesSlides(): any {
    return this._degreesSlides;
  }

  set degreesSlides(value: any) {
    this._degreesSlides = value;
  }

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(value: number) {
    this._activeIndex = value;
  }

  get lockSlides(): boolean {
    return this._lockSlides;
  }

  set lockSlides(value: boolean) {
    this._lockSlides = value;
  }

  get lastIndex(): number {
    return this._lastIndex;
  }

  set lastIndex(value: number) {
    this._lastIndex = value;
  }
}
