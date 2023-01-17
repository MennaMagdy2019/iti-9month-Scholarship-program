#include <iostream>

using namespace std;
//Geoshape
class Geoshape
{
protected :
    float dim1,dim2;
public:
    Geoshape() {dim1=dim2=0;}
    Geoshape(float d)
    {
        dim1=dim2=d;
    }
    Geoshape(float d1,float d2)
    {
        dim1=d1;
        dim2=d2;
    }
    void setdim1 (float d1){dim1=d1;}
    void setdim2 (float d2){dim2=d2;}
    float getdim1(){return dim1;}
    float getdim2 (){return dim2;}

    float CalcArea()
    {
        return 0.0;
    }

};

//Circle
class Circle:public Geoshape
{
public:
    Circle(){ }
    Circle(float r):Geoshape(r)
    { }
    float CalcArea() {return 3.14*dim1*dim2;}
};
/*
//protect Circle
class Circle:protected Geoshape
{
public:
    Circle(){ }
    Circle(float r):Geoshape(r)
    { }
   // void setr(float r) {dim1=dim2=r;}
    float CalcArea() {return 3.14*dim1*dim2;}
};
*/
//Rect
class Rect:public Geoshape
{
public:
    Rect() { }
    Rect (float L,float W) : Geoshape(L,W)
    { }
    float CalcArea()
    {
        return dim1*dim2;
    }
};
//Square
class Square:public Rect
{
public:
    Square() { }
    Square (float d) : Rect(d,d)
    { }
};
/*
//protected Square
class Square:protected Rect
{
public:
    Square() { }
    Square (float d) : Rect(d,d)
    { }
     void setd(float d) {dim1=dim2=d;}
    float CalcArea() {return dim1*dim2;}
};
*/
//Triangle
class Triangle:public Geoshape
{
public:
    Triangle() { }
    Triangle (float b,float h) : Geoshape(b,h)
    { }
    float CalcArea()
    {
        return 0.5*dim1*dim2;
    }
};
int main()
{
      Triangle t(20,10);
      cout<<"Area of Triangle :"<<t.CalcArea()<<endl;

      Circle c(7);
      cout<<"Area of Circle : "<<c.CalcArea()<<endl;

      Rect r(2,5);
      cout<<"Area of Rect : "<<r.CalcArea()<<endl;

      Square  s(5);
      cout<<"Area of Square : "<<s.CalcArea()<<endl;

    /*  Circle c1;
      c1.setr(2.0);
      c1.setr(2);

      square ss;
      ss.setdim1(7);
      ss.setd(7);
      */
}
