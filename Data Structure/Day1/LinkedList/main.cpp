#include <iostream>

#include <LinkedList.h>
using namespace std;

int main()
{
    LinkedList<int> myList;

    myList.add(10);
    myList.add(20);
    myList.add(30);
    myList.add(40);
    myList.add(50);

    myList.Display();

    if(myList.Search(20))
        cout<<endl<<"Found";
    else
        cout<<endl<<"NOT Found";

   cout<<endl<<"NUM of elements in LinkedLists : "<<myList.GetCount()<<endl;
   myList.InsertAfter(80,5);
    myList.Display();
    cout<<endl;

   myList.InsertAfter(70,10);
    myList.Display();
    cout<<endl;

    myList.InsertAfter(45,40);
    myList.Display();
    cout<<endl;
    myList.InsertAfter(100,50);
    myList.Display();

    cout<<endl<<"The Data in this index: "<<myList.GetDataByIndex(2)<<endl;


    return 0;
}
