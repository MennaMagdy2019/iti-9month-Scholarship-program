#include <iostream>
#include <Sorting.h>
using namespace std;

int main()
{
    Sorting mysort;
    mysort.Add(3);
    mysort.Add(15);
    mysort.Add(7);
    mysort.Add(99);
    mysort.Add(11);
  mysort.display();
  cout<<endl<<"after Sorting"<<endl;
    mysort.sorting();
    mysort.display();
   // cout << "Hello world!" << endl;
    return 0;
}
