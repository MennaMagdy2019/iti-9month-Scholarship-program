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
    Complex(int i){
      real=i ;
      img=i;
     // printf("integer equal constructor \n");
    };

    ~Complex(){

    printf("destructor \n");
    };
};
Complex add(Complex,Complex);
Complex add(Complex,Complex, Complex);
Complex add(Complex,float);
Complex add(float,Complex);
int main()
{
    /*Complex n1;
    Complex n2(2.0,3.0);
    Complex n3(2);
    printf("----------\n");
    */
    Complex c1 , c2,c3,comp  ,comp2,comp3,comp4;
    float cf1;

    cout<<"case1 \n";
    float n1r,n1i,n2r,n2i;
    cout<<"enter real part num1:";
    cin>>n1r;
    c1.setreal(n1r);
   // cout<<c1.getreal()<<endl;
    cout << "enter img num1:" << endl;
    cin>>n1i;
     c1.setimg(n1i);
     c1.print();
     cout<<endl;

     cout<<"enter real part num2 : ";
    cin>>n2r;
    c2.setreal(n2r);
    cout << "enter img num2:" << endl;
    cin>>n2i;
     c2.setimg(n2i);
    // cout<<c1.getreal();
    c2.print();
    cout<<endl;

    float n3r,n3i;
    cout<<"enter real part c3 num1:";
    cin>>n3r;
    c3.setreal(n3r);
   // cout<<c1.getreal()<<endl;
    cout << "enter img c3 num1:" << endl;
    cin>>n3i;
     c3.setimg(n3i);
     c3.print();

      cout<<"sum of 2 complex  numbers :";
    comp= add(c1,c2);
    comp.print();

     cout<<"sum of 3 complex  numbers :";
    comp4= add(c1,c2,c3);
    comp4.print();
    /****************/
   fflush(stdin);

    cout<<"enter float num :";
    cin>>cf1;
     cout<<endl;
     cout<<"sum of complex & float number : ";
    comp2= add(c3,cf1);
    comp2.print();
     cout<<"sum of float & complex  number : ";
    comp3= add(cf1,c3);
    comp3.print();

   // cout<<c1.getreal()<<endl;

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
    else if(real == 0 && img==0) cout<<"0";
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
Complex add (Complex c1 ,float c2)
{
    Complex sum;
    sum.setreal(c1.getreal()+c2);
    sum.setimg(c1.getimg());

    return sum;
}
Complex add (float c1 ,Complex c2)
{
    Complex sum;
    sum.setreal(c1+c2.getreal());
    sum.setimg(c2.getimg());

    return sum;
}
Complex add (Complex c1 ,Complex c2, Complex c3)
{
    Complex sum;
    sum.setreal(c1.getreal()+c2.getreal()+c3.getreal());
    sum.setimg(c1.getimg()+c2.getimg()+c3.getimg());

    return sum;
}
