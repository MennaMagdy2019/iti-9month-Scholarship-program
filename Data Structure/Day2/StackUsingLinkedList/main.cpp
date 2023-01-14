
#include <iostream>
#include <Stack.h>

using namespace std;


int main()
{
    Stack<int> st;

    st.Push(5);
    st.Push(10);
    st.Push(15);
    st.Push(20);

    st.display();

    cout<<"******after pop elem*******"<<endl;
    st.pop();
    st.display();
    return 0;
}
