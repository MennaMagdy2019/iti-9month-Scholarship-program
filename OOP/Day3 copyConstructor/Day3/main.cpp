#include <iostream>
using namespace std;

class Stack
{
    int *stptr;
    int top,s;

static int counter;
public:

  Stack(Stack &);

    Stack(){
        top = 0;
        s=10;
        stptr=new int [s];
      //  cout<<"default structor"<<endl;
        counter++;
    }
    Stack (int sz){
        top=0;
        s=sz;
        stptr = new int[s];
       // cout<<"I am param constructor"<<endl;
        counter++;
    }
    void push(int);
    int pop();


     ~Stack() {
        delete stptr;
        cout<<"finihed \n";
        counter--;
    }
static int getcounter() {return counter;}
int gettop(){
return top;
}
};
int Stack::counter=0;
/*
void viewContent(Stack s)
{
    int n=s.gettop();
    for(int i=0;i<n;i++){
        cout<<s.pop()<<endl;
    }
}
*/


void viewContent(Stack s)
{
    int n=s.gettop();
    for(int i=0;i<n;i++){
        cout<<s.pop()<<endl;
    }
}

//copy constructor

 Stack::Stack(Stack &x)
{
    this->s = x.s;
    this->top = x.top;
    counter++;
    this->stptr = new int [x.s];
    for(int i=0;i<this->top;i++)
    {
        this->stptr[i]=x.stptr[i];
    }
    cout<<"copy constructor"<<endl;
}




int main()
{

    Stack s;
    Stack s1(20);
/*
    s.push(5);
    s.push(7);
    s.push(7);
*/
    s1.push(3);
    s1.push(4);
     s1.push(7);

  // cout<<"counter :"<<Stack::getcounter()<<endl;

   //viewContent(s1);
   viewContent(s1);
  cout<<"in main : "<<s1.pop()<<endl;



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
