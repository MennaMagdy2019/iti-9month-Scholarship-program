#include <iostream>
using namespace std;
template <class T>
class Stack
{
    T *stptr;
    int top;
    int s;
    static int counter;

public:
    Stack(Stack &);

    Stack(){
        top = 0;
        s=10;
        stptr=new T [s];
        counter++;
       // cout<<"default structor"<<endl;
    }
    Stack (int sz){
        top=0;
        s=sz;
        stptr = new T[s];
        counter++;
        //cout<<"I am param constructor"<<endl;
    }
    void push(T);
    T pop();

     ~Stack() {
        delete [] stptr;
        counter--;
       // cout<<"finihed";
    }
    static int getcounter()
    {
        return counter;
    }
   Stack& operator=(Stack &);

   Stack& operator[] (int pos);

   friend void viewContent(Stack);
};
template <class T>
int Stack <T>::counter=0;

template <class T>
Stack <T>::Stack(Stack<T> &mys)
{

    top=mys.top;
    s=mys.s;
    for(int i=0;i<top;i++)
    {
        stptr[i]=mys.stptr[i];
    }
    counter++;
}

int main()
{

    Stack<int> s1(5),s2;

    s1.push(5);
    s1.push(7);
    s1.push(9);

    cout<<"NO of integer stacks :"<<endl;
    cout<<Stack<int>::getcounter()<<endl;

    cout<<" = operator :"<<endl;
  Stack<int> myStack;
    myStack=s1;
  //myStack.push(10);

   cout<<myStack.pop()<<endl;
  cout<<myStack.pop()<<endl;
cout<<myStack.pop()<<endl;

  cout<<"[] operator :"<<endl;
  s1[0];

cout<<"-----\n";
  Stack<char> mys;
  mys.push('A');
  mys.push('z');
  cout<<mys.pop()<<endl;;
  cout<<"No of char Stacks :";
  cout<<Stack<char>::getcounter()<<endl;
    return 0;
}

//overload =operator
template <class T>
Stack<T>& Stack<T>::operator= (Stack<T> & s1)
{
    delete []stptr;
    top=s1.top;
    s=s1.s;
    stptr=new int(s);
    for(int i=0;i<top;i++)
    {
         stptr[i]=s1.stptr[i];
    }
    return *this;
}

// overload []
template <class T>
Stack<T>& Stack<T>::operator[] (int pos)
{

     for(int i=0;i<top;i++)
    {
      if(i== pos)
        cout<<stptr[i]<<endl;
    }
    return *this;
}
template <class T>
void Stack<T>::push(T n)
{
    if(top==n)
      {
          cout<<"stack full";
      }
    else
    {
        stptr[top]=n;
        top++;
    }
}
template <class T>
T Stack<T>::pop()
{
    T retval =0;
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
template <class T>
void viewContent(Stack<T> mys)
{
    for(int i=0;i<mys.top;i++)
        cout<<mys.stptr[i]<<endl;
}
