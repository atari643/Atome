function Balle(x, y, col) {
    this.x = x;
    this.y = y;
    this.cap = -1;
    this.col = color(col);

    this.display = function () {
        fill(this.col);
        ellipse(this.x, this.y, 5, 5);
    }
    this.move = function () {
        if (this.x >= 600 || this.y >= 600) {
         this.cap=-1;
        }
        if(this.x<=0 || this.y <= 0){
            this.cap=1;
        }
        if((this.x>=200 || this.y>=200) && (this.x<=220 || this.y<=220)){
            this.x+=200;
            this.y+=200;
        }
        if((this.x<=390 || this.y<=390) && (this.x>=300 || this.y>=300)){
            this.x-=200;
            this.y-=200;
        }
        this.x=this.x+this.cap;
        this.y=this.y+this.cap;
    }
}