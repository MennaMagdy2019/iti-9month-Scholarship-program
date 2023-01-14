#include <iostream>
#include <BinarySearch.h>
using namespace std;

int main()
{
   BinarySearch BS;
    BS.Add(3);
    BS.Add(15);
    BS.Add(7);
    BS.Add(99);
    BS.Add(11);

  cout<<endl;
 BS.binarySearch(15);
   cout<<endl;
 BS.binarySearch(-15);
  //  cout << "Hello world!" << endl;
    return 0;
}
