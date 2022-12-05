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
    void print();

};
Complex add(Complex,Complex);
int main()
{
    Complex c1 , c2,comp;
    float n1r,n1i,n2r,n2i;
    cout<<"enter real part num1:";
    cin>>n1r;
    c1.setreal(n1r);
   // cout<<c1.getreal()<<endl;
    cout << "enter img num1:" << endl;
    cin>>n1i;
     c1.setimg(n1i);
      //cout<<c1.getreal()<<endl;
     c1.print();
     cout<<endl;

     //fflush(stdin);
     cout<<"enter real part num2 : ";
    cin>>n2r;
    c2.setreal(n2r);
    cout << "enter img num2:" << endl;
    cin>>n2i;
     c2.setimg(n2i);
    // cout<<c1.getreal();


    c2.print();
    cout<<endl;
    comp= add(c1,c2);
    comp.print();

      //cout<<"the sum of real num is \n"<<add(c1,c2).getreal()<<endl;
      //cout<<"the sum of img num is \n"<<add(c1,c2).getimg()<<endl;
         return 0;
}
void Complex::setreal(float r){
    real = r;
}
void Complex::setimg(float i){
    img = i;
}
 float Complex::getreal(){
     return real;
}
float Complex::getimg(){
     return img;
}
void Complex::print() {
     if(real ==0) {
        cout<<img<<"i";
    }

    else if(img == 0){
        cout<<real;
    }
    else if (img <= -2){
        cout <<real << img << "i";
    }
    else if (img == -1){
        cout <<real << "-i";
    }
    else if(img == 1){
        cout<<real<<"i";
    }
    else{
        cout<<real<<"+"<<img<<"i \n";
    }
}
Complex add (Complex c1 ,Complex c2)
{
    Complex sum;
    sum.setreal(c1.getreal()+c2.getreal());
    sum.setimg(c1.getimg()+c2.getimg());


    return sum;
}
