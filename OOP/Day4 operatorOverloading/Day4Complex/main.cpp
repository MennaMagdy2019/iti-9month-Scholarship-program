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
    Complex(float i){
      real=i ;
      img=i;
     // printf("integer equal constructor \n");
    };

   //operator +
   Complex operator + (const Complex) const;
   Complex operator + (float f);
   //standalone
   friend Complex operator+(float,Complex);
     //operator -
   Complex operator - (const Complex) const;
   Complex operator - (float f);
   //standalone
   friend Complex operator-(float,Complex);
     //operator *
   Complex operator * (const Complex) const;
   Complex operator * (float f);
   //standalone
   friend Complex operator*(float,Complex);

   //overload operator ++(prefix)
    Complex operator++ ();
    Complex operator++(int);
    Complex operator+=(Complex);
     Complex operator-- ();
    Complex operator--(int);
    Complex operator-=(Complex);
    Complex operator = (Complex);
    int operator == (Complex);
    int operator != (Complex);
    int operator < (Complex);
    int operator > (Complex);
    operator float();
    operator int();

};

int main()
{
    Complex c1(5.2,3.2) ,c2(4.2,2.1) ;
    Complex res1,res2 , res3,res4,res5,res6,res7,res8,res9,res10,res11;
    float f1=4.4;
    cout<<"c1 :";
    c1.print();
    cout<<"C2: ";
    c2.print();
    cout<<"comp + comp"<<endl;
    res1=c1+c2;
    res1.print();

    cout<<"comp + float "<<endl;
    res2=c1+f1;
    res2.print();

  cout<<"float + comp "<<endl;
    res3=f1+c1;
    res3.print();

    /***********- operator*****/
     cout<<"comp - comp"<<endl;
    res1=c1-c2;
    res1.print();

    cout<<"comp - float "<<endl;
    res2=c1-f1;
    res2.print();

  cout<<"float- comp "<<endl;
    res3=f1-c1;
    res3.print();

    /*************** *operator***/
     cout<<"comp * comp"<<endl;
    res1=c1*c2;
    res1.print();

    cout<<"comp * float "<<endl;
    res2=c1*f1;
    res2.print();

  cout<<"float * comp "<<endl;
    res3=f1*c1;
    res3.print();

    //++c1;
    cout<<" ++ prefix"<<endl;
    res4=++c1;
    res4.print();

    //c2++;
    cout<<"postfix ++"<<endl;
    res5=c2++;
    res5.print();

    // += operator
    cout<<"+= operator"<<endl;
    c1 +=c2;
    c1.print();


    //--c1;
    cout<<" -- prefix"<<endl;
    res8=--c1;
    res8.print();

    //c2--;
    cout<<"postfix --"<<endl;
    res9=c2--;
    res9.print();

    // += operator
    cout<<"-= operator"<<endl;
    c1 -=c2;
    c1.print();

    // = operator
    cout<<" = "<<endl;
    res6=c2;
    res6.print();

    // == operator
    cout<<"== & !="<<endl;
    if(c1==c2)
        cout<<"difference is 0"<<endl;
     if(c1!=c2)
        cout<<"difference is 1"<<endl;

    // >  operator
    cout<<" c1 > c2 "<<endl;
    res10= c1>c2;
    res10.print();
    cout<<" \n c1 < c2 "<<endl;
    res11=c1<c2;
    res11.print();

    // casting float
    float z;
    cout<<"\n casting float: "<<endl;
    z=float(c1);
   cout<<z<<endl;

    // casting int
    int y;
    cout<<"casting int : "<<endl;
    y=int(c1);
   cout<<y<<endl;
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
//comp +comp
Complex Complex::operator+ (const Complex c) const{
    Complex res;
    res.real=this->real + c.real;
    res.img= img+c.img;
    return res;
}

//float + Comp
Complex Complex::operator+ (float f){
    Complex res;
    res.real=real + f;
    res.img= img;
    return res;
}

// Comp + float
Complex operator+ (float f , Complex c){
    Complex res;
    res.real=c.real + f;
    res.img= c.img;
    return res;
}

//comp -comp
Complex Complex::operator- (const Complex c) const{
    Complex res;
    res.real=this->real - c.real;
    res.img= img-c.img;
    return res;
}

//float - Comp
Complex Complex::operator- (float f){
    Complex res;
    res.real=real - f;
    res.img= img;
    return res;
}

// Comp - float
Complex operator- (float f , Complex c){
       Complex res;
    res.real=c.real - f;
    res.img= c.img;
    return res;
}

//comp *comp
Complex Complex::operator* (const Complex c) const{
    Complex res;
    res.real=this->real * c.real;
    res.img= img*c.img;
    return res;
}

//float * Comp
Complex Complex::operator* (float f){
    Complex res;
    res.real=real * f;
    res.img= img;
    return res;
}

// Comp -*float
Complex operator* (float f , Complex c){
       Complex res;
    res.real=c.real * f;
    res.img= c.img;
    return res;
}
// overload operator ++(prefix)
Complex Complex::operator++ ()
{
    real++;
    return *this;
}

// overload operator ++(postfix)
Complex Complex::operator++(int)
{
    Complex temp = *this;
    real++;
    return temp;
}
// += operator
Complex Complex::operator += (Complex c)
{
    real += c.real;
    img = img+c.img;
    return *this;
}

// overload operator --(prefix)
Complex Complex::operator-- ()
{
    real--;
    return *this;
}

// overload operator --(postfix)
Complex Complex::operator--(int)
{
    Complex temp = *this;
    real--;
    return temp;
}
// += operator
Complex Complex::operator -= (Complex c)
{
    real -= c.real;
    img = img+c.img;
    return *this;
}

// = operator
Complex Complex::operator= (Complex c)
{
    real = c.real;
    img = c.img;
    return *this;
}
// == operator
int Complex::operator== (Complex myc)
{
    return ((real==myc.real) && (img == myc.img));
}
// != operator
int Complex::operator != (Complex myc)
{
    return !((real==myc.real) && (img == myc.img));
}
// > operator
int Complex::operator > (Complex myc)
{
    if(real>myc.real)
    {
        cout<<"real>real "<<endl;
        return 1;
    }

    else if (real== myc.real)
    {
        if (img>myc.img)
        {
            cout<<"real =real & img>myc.img"<<endl;
             return  -1;
        }
        else
        {
            cout<<"real =real & img< img"<<endl;
             return  -2;
        }
    }
    else
    {
        cout<<"real <  real"<<endl;
        return 2;

    }

}
// < operator
int Complex::operator < (Complex myc)
{
     if(real<myc.real)
     {
         cout<<"real <  real"<<endl;
        return 2;
     }
    else if (real== myc.real)
    {
        if (img<myc.img)
        {
            cout<<"real =real & img< img"<<endl;
             return  -2;
        }
        else
        {
            cout<<"real =real & img>myc.img"<<endl;
             return  -1;
        }
    }
    else
    {
        cout<<"real > real"<<endl;
        return 1;

    }
}
//casting
Complex::operator float()
{
    return real;
}
Complex::operator int()
{
    return real;
}
