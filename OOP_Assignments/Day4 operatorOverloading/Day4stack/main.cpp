#include <iostream>
using namespace std;

class Stack
{
    int *stptr;
    int top;
    int s;

public:
    Stack(Stack &);

    Stack(){
        top = 0;
        s=10;
        stptr=new int [s];
       // cout<<"default structor"<<endl;
    }
    Stack (int sz){
        top=0;
        s=sz;
        stptr = new int[s];
        //cout<<"I am param constructor"<<endl;
    }
    void push(int);
    int pop();

     ~Stack() {
        delete stptr;
        cout<<"finihed";
    }
   Stack& operator=(Stack &);

   Stack& operator[] (int pos);
//   Stack& operator[] (int pos , int val);
};
int main()
{

    Stack s;
   // Stack s1(20);

    s.push(5);
    s.push(7);
    s.push(9);
    cout<<" = operator :"<<endl;
  Stack myStack;
    myStack=s;
  myStack.push(10);

   cout<<myStack.pop()<<endl;
  cout<<myStack.pop()<<endl;
cout<<myStack.pop()<<endl;

  cout<<"{} operator :"<<endl;
  s[0];
//  س[2]=3;

    return 0;
}

//overload =operator

Stack& Stack::operator= (Stack& s1)
{
    delete this->stptr;
    top=s1.top;
    s=s1.s;
    stptr=new int(s);
    for(int i=0;i<top;i++)
    {
         stptr[i]=s1.stptr[i];
        //stptr[i];

    }
    return *this;
}
// overload []
Stack& Stack::operator[] (int pos)
{

     for(int i=0;i<top;i++)
    {
      if(i== pos)
        cout<<"done :"<<stptr[i]<<endl;
    }
    return *this;
}

void Stack::push(int n)
{
    if(top==10)
        cout<<"stack full";
    else
    {
        stptr[top]=n;
        top++;
    }
}
int Stack::pop()
{
    int retval =0;
    if(top == 0)
    {
        cout<<"stack empty"<<endl;
    }
    else
    {
        top--;
        retval=stptr[top];
    }
    return retval;
}
