#include <iostream>
#include <Queue.h>
using namespace std;

int main()
{
   Queue <int>q(4);
   q.Enqueue(55);
    q.Enqueue(20);
    q.Enqueue(35);
    q.Enqueue(40);
    q.display();

    cout<<"after deque"<<endl;
    int num;
 q.Dequeue(num);
  cout<<"num : "<<num<<endl;
  q.Dequeue(num);
  cout<<"num : "<<num<<endl;
  q.display();
  cout<<"Circular queue "<<endl;
   q.Enqueue(80);
   q.Enqueue(90);
     q.display();

    return 0;
}
