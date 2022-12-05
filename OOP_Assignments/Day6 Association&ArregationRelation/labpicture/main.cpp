#include <iostream>
#include <graphics.h>
using namespace std;


class point{
     int x,y;
public:
    point(){x=y=0;}
    point(int m , int n)
    {
        x=m;
        y=n;
    }
    Poiny(int v)
    {
        x=y=v;
    }
    void setx(int m){x=m;}
    void sety(int n){y=n;}
    int getx(){return x;}
    int gety() {return y;}

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
    Rect(point p1 ,point p2):UL(p1),LR(p2)
    {
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
      line(L.getx(),L.gety(),R.getx(),R.gety());
 }
};



class picture
{
    int cnum;
    int rnum;
    int lnum;
    Circle *pcircles;
    Rect *prects;
    Line *plines;

public:
  picture()
  {
    cnum=0;
    rnum=0;
    lnum=0;
    pcircles=NULL;
    prects=NULL;
    plines=NULL;
  }
  picture(Circle *pc,Rect *pr,Line *p1,int cn,int rn,int ln)
  {
    cnum=cn;
    rnum=rn;
    lnum=ln;
    pcircles=pc;
    prects=pr;
    plines=p1;
  }
    void setCircles(Circle *pc ,int cn)
    {
        pcircles=pc;
        cnum=cn;
    }
    void setRects(Rect *pr ,int rn)
    {
        prects=pr;
        rnum=rn;
    }
    void setlines(Line *pl ,int ln)
    {
        plines=pl;
        lnum=ln;
    }
    void Paint();
};

void picture::Paint()
{

    int i;
    for(i=0;i<cnum;i++)
    {
        pcircles[i].draw();
    }
    for(i=0;i<rnum;i++)
    {
        prects[i].draw();
    }
    for(i=0;i<lnum;i++)
    {
        plines[i].draw();
    }
}

int main()
{
    initgraph();
   Line *pl = new Line(50,50,100,150);
   Circle *pc = new Circle[3];
   Rect *pr=new Rect[2];
   pc[0] = Circle(50,200,300);
   pc[1] = Circle(150,200,110);
   pc[2] = Circle(200,300,200);

   point p1(100,150);
   point p2(200,300);

   pr[0]=Rect(p1,p2);
   pr[1]=Rect(300,250,300,120);

   picture pic1(pc,pr,pl,3,2,1);
   pic1.Paint();
    return 0;
}
