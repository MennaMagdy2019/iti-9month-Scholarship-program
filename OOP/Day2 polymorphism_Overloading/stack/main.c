#include <stdio.h>
#include <stdlib.h>

class stack
{
    int st[10];
    int top;

public:
    void push(int);
    int pop();
    void initstack()
    {
        top = 0;
    }
};
int main()
{
    stack s;
    s.push(5);
    s.push(7);

    cout<<s.pop();
    cout<<s.pop();
    cout<<s.pop();
    return 0;
}

void stack::Push(int n)
{
    if(top==10)
        cout<<"stack full";
    else
    {
        st[top]=n;
        top++;
    }
}
int stack:: pop()
{
    int retval =0;
    if(top == 0)
    {
        cout<<"stack empty";
    }
    else
    {
        top--;
        retval st[top];
    }
    return retval;
}
