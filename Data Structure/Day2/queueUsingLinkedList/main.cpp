#include <iostream>
#include <Queue.h>
using namespace std;

int main()
{
     Queue<int> q;

    q.Enqueue(5);
    q.Enqueue(10);
    q.Enqueue(15);
    q.Enqueue(20);
    q.display();

    cout<<"******after Dequeue elem*******"<<endl;
    q.Dequeue();
    q.display();
    return 0;
}
