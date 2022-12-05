#include <iostream>
#include <graphics.h>
using namespace std;
 class point{
     int x,y;

  //   string color;
public:
    point(){x=y=0;}
    point(int m , int n )
    {
        x=m;
        y=n;
       // c=col;

    }
    Poiny(int v)
    {
        x=y=v;
    }
    void setx(int m){x=m;}
    void sety(int n){y=n;}
    int getx(){return x;}
    int gety() {return y;}

//    void setColor(string col){c=col;}
   // string setcolor () {return color;}
    point(point& myp)
    {
        x=myp.x;
        y=myp.y;
    }
 };
 class Circle{
     point center;
    int rad;
public:
    Circle():center()
    {
        rad=0;
    }
    Circle(int x,int y,int r):center(x,y)
    {
        rad=r;
    }
    Circle(point p ,int r):center(p)
    {
        rad=r;
    }
    void draw()
    {
        setcolor(070);
       circle(center.getx(),center.gety(),rad);
    }

     void setrad(int r)
    {
        rad=r;
    }
    void setcenter(int x1,int y1)
    {
        center.setx(x1);
        center.sety(y1);
    }
 };

 class Rect{
 point UL;
 point LR;
 public:
     Rect():UL(),LR()
     {}
     Rect(int x1,int y1,int x2,int y2):UL(x1,y1),LR(x2,y2)
      {}
      void draw(){
          setcolor(020);
      rectangle(UL.getx(),UL.gety(),LR.getx(),LR.gety());
      }

    void setLR(int x1,int y1)
    {
       LR.setx(x1);
       LR.sety(y1);
    }
     void setUL(int x1,int y1)
    {
        UL.setx(x1);
       UL.sety(y1);
    }
    void getUL(int &x,int &y)
    {
        x=UL.getx();
        y=UL.gety();
    }
     void getLR(int &x,int &y)
    {
        x=LR.getx();
        y=LR.gety();
    }

};

class Line{
 point L;
 point R;
 public:
     Line():L(),R()
     {}
     Line(int x1,int y1,int x2,int y2):L(x1,y1),R(x2,y2)
      {}
      void draw(){
          setcolor(010);
      line(L.getx(),L.gety(),R.getx(),R.gety());
 }
};

int main()
{
    initgraph();

   Circle c1;
   ;
   Circle c2(100,150,50);
   c2.draw();
//   setfillstyle(SOLID_FILL,RED);



   point p(300,200);
   Circle myc(p,60);
   myc.draw();

   Circle c3;
   c3.setrad(20);
   c3.setcenter(250,200);
    c3.draw();


   Rect r(200,300,150,150);
   r.draw();

    Rect r1;
   r1.setLR(400,150);
   r1.setUL(600,360);
   r1.draw();

   Line l(700,500,550,450);
   l.draw();
    return 0;
}
/*
class Color {
public:
    static const int MAX = 0xffff;
    Color(int red, int green, int blue, int alpha = MAX);
    // stuff

    static const Color red;
    static const Color green;
    static const Color blue;
    static const Color white;
    static const Color black;
    // ...

private:
    int m_red;
    int m_green;
    int m_blue;
    int m_alpha;
};

const Color Color::red(MAX, 0, 0);
const Color Color::green(0, MAX, 0);
const Color Color::blue(0, 0, MAX);
const Color Color::white(MAX, MAX, MAX);
const Color Color::black(0, 0, 0);
*/
