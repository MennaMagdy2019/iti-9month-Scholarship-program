#include <iostream>
#include<BinarySearchTree.h>

using namespace std;

int main()
{
    BinarySearchTree<int> tre;

    tre.Add(50);
    tre.Add(40);
    tre.Add(30);
    tre.Add(60);
    tre.Add(70);
    tre.Add(65);

   tre.Traverse();
   cout<<endl;
   cout<<tre.GetMaxDepthRoot();

    return 0;
}
