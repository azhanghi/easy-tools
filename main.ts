//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    /**
    * 計算X * Y
    */
    //% blockId="areaOfRectangle" block="計算X * Y   X %X|width %Y"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(X: number, Y:number): number {
        return X*Y
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
}
