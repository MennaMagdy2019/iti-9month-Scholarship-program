#include <iostream>
using namespace std;

class Stack
{
    int *stptr;
    int top;
    int s;

public:
    Stack(){
        top = 0;
        s=10;
        stptr=new int [s];
        cout<<"default structor"<<endl;
    }
    Stack (int sz){
        top=0;
        s=sz;
        stptr = new int[s];
        cout<<"I am param constructor"<<endl;
    }
    void push(int);
    int pop();

     ~Stack() {
        delete stptr;
        cout<<"finihed";
    }

};
int main()
{

    Stack s;
    Stack s1(20);
   //s.nitstack();
    s.push(5);
    s.push(7);

    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;

    s1.push(2);
    s1.push(3);
    s1.push(4);

    cout<<s1.pop()<<endl;
    cout<<s1.pop()<<endl;

    return 0;
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
