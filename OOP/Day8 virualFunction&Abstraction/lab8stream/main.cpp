#include <iostream>

using namespace std;
class Complex {
    float real;
    float img;
public:

  void setreal(float);
    float getreal();
    void setimg(float);
    float getimg();


    Complex(){
    real=0;
    img=0;
   // printf("default constructor \n");
    };
       Complex(float i,float j){
      real=i ;
      img=j;
     // printf("float constructor\n");
    };
    Complex(float i){
      real=i ;
      img=i;
     // printf("integer equal constructor \n");
    };




   //standalone
   friend ostream & operator << (ostream & , Complex);
   friend istream & operator >> (istream & , Complex);


};
void Complex::setreal(float r){
    real = r;
}
void Complex::setimg(float i){
    img = i;
}
 float Complex::getreal(){
     return real;
}
float Complex::getimg(){  return img;}
int main()
{
    Complex c1(5,3), c2(0,3),c3 ;
   float  c3r,c3i;
   cout<<"enter complex number : "<<endl;
    in>>c3r;
    c3.setreal(c3r);
    in>>c3i;
     c3.setimg(c3i);
  cout<<c3;
  cout << c1;
  cout<< c2;
    return 0;
}
 istream & operator >> (istream &myinputstream , Complex c)
 {
     myinputstream>>c.real>>c.img;
     return myinputstream;
 }
 ostream & operator << (ostream &mystream , Complex c)
 {
      if(c.real ==0) {mystream << "(" << c.img << "i" << ")"<<endl; }
    else if(c.real == 0 && c.img==0) cout<<"0";
    else if(c.img == 0){ mystream << "(" << c.real<< ")"<<endl;}
    else if (c.img <= -2){mystream <<c.real << c.img << "i"<<endl;}
    else if (c.img == -1){mystream << "(" << c.real << "-i"<< ")"<<endl;}
    else if(c.img == 1){mystream << "(" << c.real << "+i"<<")"<<endl;}
    else{mystream << "(" << c.real << "+" << c.img << "i)"<<endl;}
     return mystream;
 }



