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
    void detdim1 (float d1){dim1=d1;}
    void setdim2 (float d2){dim2=d2;}
    float getdim1(){return dim1;}
    float getdim2 (){return dim2;}

    //rule 1 down to up
     virtual float CalcArea()=0;

/*    virtual float CalcArea()
    {
        return 0.0;
    }*/
   virtual void baseclass(){
      cout<<"Geoshape class from Geoshape class"<<endl;
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

    void baseclass(){
      cout<<"Geoshape class from Circle class"<<endl;
    }
     void derivedclass(){
      cout<<"Circle class from Circle class"<<endl;
    }
};
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

float sumofGeoAreas(Geoshape *g1,Geoshape *g2 , Geoshape *g3)
{
    return g1->CalcArea() + g2->CalcArea() + g3->CalcArea();
}
int main()
{
     Geoshape *p;
     Circle myc(10);
     Rect myR(3,5);
     Square s(7);
     Triangle t(10,20);
     p=&myc;
     cout<<"Area of circle : "<<p->CalcArea()<<endl;
     p=&myR;
     cout<<"Area of Rect : "<<p->CalcArea()<<endl;

     cout<<"sumofGeoAreas :"<<sumofGeoAreas(&myR,&s,&myc)<<endl;
      cout<<"sumofGeoAreas :"<<sumofGeoAreas(&myc,&s,&t)<<endl;

      //rule 3
      Geoshape *ptr;
      Circle obj;
      ptr = &obj;

      ptr ->baseclass();
//      ptr ->derivedclass();
}
